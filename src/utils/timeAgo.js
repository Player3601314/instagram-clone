// export const timeAgo = (timestmap) => {
//   const now = new Date().getTime();
//   const secondsAgo = Math.floor((now - timestmap) / 1000);

//   if(secondsAgo < 60){
//     return `${secondsAgo} s ago`
//   }
//   else if(secondsAgo > 3600) {
//     const minutesAgo = Math.floor(secondsAgo / 60);
//     return `${minutesAgo} m ago`
//   }
//   else if(secondsAgo < 86400) {
//     const hoursAgo = Math.floor(secondsAgo / 3600);
//     return `${hoursAgo} h ago`
//   }
//   else if (secondsAgo < 604800){
//     const daysAgo = Math.floor(secondsAgo / 86400);
//     return `${daysAgo} d ago`
//   }
//   else {
//     const weeksAgo = Math.floor(secondsAgo / 604800);
//     return `${weeksAgo} w ago`
//   }
// }

import {
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInWeeks,
  differenceInMonths,
  differenceInYears,
} from 'date-fns';

export function timeAgo(date) {
  const now = new Date();
  const givenDate = new Date(date);

  const seconds = differenceInSeconds(now, givenDate);
  const minutes = differenceInMinutes(now, givenDate);
  const hours = differenceInHours(now, givenDate);
  const days = differenceInDays(now, givenDate);
  const weeks = differenceInWeeks(now, givenDate);
  const months = differenceInMonths(now, givenDate);
  const years = differenceInYears(now, givenDate);

  if (years > 0) {
    return `${years}y ago`;
  } else if (months > 0) {
    return `${months}mo ago`;
  } else if (weeks > 0) {
    return `${weeks}w ago`;
  } else if (days > 0) {
    return `${days}d ago`;
  } else if (hours > 0) {
    return `${hours}h ago`;
  } else if (minutes > 0) {
    return `${minutes}m ago`;
  } else {
    return `${seconds}s ago`;
  }
}