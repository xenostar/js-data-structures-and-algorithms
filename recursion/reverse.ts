const reverse = (str: string) => {
  if (str.length === 0) return '';
  return str.slice(-1) + reverse(str.slice(0, -1));
};

// 'emosewa'
reverse('awesome'); //?
// 'loohcsmhtir'
reverse('rithmschool'); //?
