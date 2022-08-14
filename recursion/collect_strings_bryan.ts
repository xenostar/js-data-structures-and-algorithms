const collectStrings = (obj) => {
  let strList: string[] = [];

  // loop through object
  for (const key in obj) {
    // if value is object, send it back recursively
    if (typeof obj[key] === 'object') {
      strList = strList.concat(collectStrings(obj[key]));
    } else if (typeof obj[key] === 'string') {
      strList.push(obj[key]);
    }
  }

  return strList;
};

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

// ["foo", "bar", "baz"]
collectStrings(obj); //?
