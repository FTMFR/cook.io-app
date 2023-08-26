"use strict";

/**
 * @param {Number} minute Cooking time
 * @returns {String}
 */

export const getTime = minute => {
    const /**{Number} */ hour = Math.floor(minute / 60);
    const /**{Number} */ day = Math.floor(hour / 60);

    const /**{Number} */ time = day || hour || minute;
    const /**{Number} */ unitIndex = [day, hour, minute].lastIndexOf(time);
    const /**{Number} */ timeUnit = ['day', 'hour', 'minute'][unitIndex];

    return { time, timeUnit }
}