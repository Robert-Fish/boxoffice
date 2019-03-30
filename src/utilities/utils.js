export const convertMinutesToHours = minutes => {
  // helper function to convert minutes into 'hh mm' format for readable running time
  var h = Math.floor(minutes / 60);
  var m = minutes % 60;
  h = h < 10 ? '' + h : h;
  m = m < 10 ? '' + m : m;
  return h + 'h ' + m + ' min';
};
