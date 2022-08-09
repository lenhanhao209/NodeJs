const dateformat = require("date-format");

class Methods {
  calculateTimeWorked = (staff) => {
    let totalHourWorked = 0;
    let totalMinWorked = 0;
    let minustesWorked;
    let hoursWorked;
    const workTimeInDay = [];
    const WorkTimesLength = staff.workTimes.length;
    let day = staff.workTimes[WorkTimesLength - 1].startTime.getDate();

    // find list work time in a day
    staff.workTimes.forEach((workTime) => {
      if (day === workTime.startTime.getDate()) {
        workTimeInDay.push(workTime);
      }
      return workTimeInDay;
    });

    workTimeInDay.forEach((workTime) => {
      // calculate hour and minutes work
      if (workTime.endTime != null) {
        if (workTime.endTime.getMinutes() >= workTime.startTime.getMinutes()) {
          minustesWorked =
            workTime.endTime.getMinutes() - workTime.startTime.getMinutes();
          hoursWorked =
            workTime.endTime.getHours() - workTime.startTime.getHours();
        } else {
          minustesWorked =
            workTime.endTime.getMinutes() -
            workTime.startTime.getMinutes() +
            60;
          hoursWorked =
            workTime.endTime.getHours() - workTime.startTime.getHours() - 1;
        }
      } else {
        totalHourWorked = 0;
        totalMinWorked = 0;
      }
      //Total hour and minutes to work in a day
      totalHourWorked = totalHourWorked + hoursWorked;
      totalMinWorked = totalMinWorked + minustesWorked;
      if (totalMinWorked > 60) {
        totalHourWorked = totalHourWorked + 1;
        totalMinWorked = totalMinWorked - 60;
      } else {
        totalHourWorked = totalHourWorked;
        totalMinWorked = totalMinWorked;
      }
      return { totalHourWorked, totalHourWorked };
    });
    return {
      totalHourWorked,
      totalMinWorked,
      workTimeInDay,
      day,
    };
  };

  overTime = ({ totalHourWorked, totalMinWorked }) => {
    let overHour;
    let overMin;
    if (totalHourWorked >= 8) {
      overHour = totalHourWorked - 8;
      overMin = totalMinWorked;
    } else {
      overHour = 0;
      overMin = 0;
    }
    if (overMin > 60) {
      overHour = overHour + 1;
      overMin = overMin - 60;
    } else {
      overHour = overHour;
      overMin = overMin;
    }
    return { overHour, overMin };
  };

  getLastStart = (staff) => {
    let lastWorked;
    const lastWorkedList = staff.workTimes.filter((workedTime) => {
      return workedTime.working === true;
    });
    return (lastWorked = lastWorkedList[lastWorkedList.length - 1]);
  };

  CheckIsStarted = (staff) => {
    if (staff.workTimes && staff.workTimes.length > 0) {
      const workTimeLength = staff.workTimes.length - 1;
      const lastStart = staff.workTimes[workTimeLength];
      if (lastStart.endTime) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  };

  getSalary = (month, staff) => {
    const year = 2021;
    const lastDayOfMonth = new Date(month);
    console.log(lastDayOfMonth);
    let overTime = 0;
    let shortTime = 0;
    const listDayLeave = [];

    // get date leave
    staff.leaveInfoList.forEach((leaveInfo) => {
      const listDay = leaveInfo.daysLeave.split("-");
      const dayLeave = {};

      const dayStartLeave = new Date(listDay[0]);
      const dayEndLeave = new Date(listDay[1]);
      const timesLeave = leaveInfo.timesLeave;

      dayLeave.dayStartLeave = dayStartLeave.getDate();
      dayLeave.dayEndLeave = dayEndLeave.getDate();
      dayLeave.monthLeave = dayStartLeave.getMonth();
      dayLeave.time = timesLeave;
      return listDayLeave.push(dayLeave);
    });

    // get over time and short time;
    for (let i = 1; i <= lastDayOfMonth; i++) {
      let timeWorkInDay = 0;
      let timeAnnualLeave = 0;

      overTime += timeWorkInDay - 8 < 0 ? 0 : timeWorkInDay - 8;
      shortTime +=
        8 - (timeWorkInDay + timeAnnualLeave) < 0
          ? 0
          : 8 - (timeWorkInDay + timeAnnualLeave);

      staff.workTimes.forEach((workTime) => {
        if (
          workTime.startTime.getDate() == i &&
          workTime.startTime.getMonth() + 1 == month
        ) {
          listDayLeave.forEach((day) => {
            const hoursStart = workTime.startTime.getHours();
            const hoursEnd = workTime.endTime.getHours();
            const timeStart = hoursStart * 60 + workTime.startTime.getMinutes();
            const timeEnd = hoursEnd * 60 + workTime.endTime.getMinutes();
            // plus time leave to timework
            if (
              day.dayStartLeave <= workTime.startTime.getDate() &&
              day.dayEndLeave >= workTime.startTime.getDate() &&
              day.monthLeave + 1 == month
            ) {
              timeAnnualLeave = day.timesLeave;
            }
            timeWorkInDay += (timeEnd - timeStart) / 60;
          });
        }
      });
    }
    return staff.salaryScale * 3000000 + (overTime - shortTime) * 200000;
  };

  getLastWorkList = (staff) => {
    const lastWorkList = [];
    const lastWorkTimes = staff.workTimes.length - 1;
    const dateWork = staff.workTimes[lastWorkTimes].getDate();
    staff.workTimes.forEach((workTime) => {
      if (workTime.startTime.getDate() === dateWork) {
        lastWorkList.push(workTime);
      }
    });
    return lastWorkList;
  };
}

module.exports = new Methods();
