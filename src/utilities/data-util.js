const getEnumKeyWithValue = (obj, value) => {
  return getEnumKeys(obj)[value + 1];
}

/**
 * Return list keys of Enum. Eg: getEnumKeys(BookStatus) =>  ['AVAILABLE', 'LOST', 'NOT_AVAILABLE', 'UNDEFIED']
 * @param {any} obj Enum object in javascript
 * @returns List of enum key. 
 */
const getEnumKeys = (obj) => {
  return obj && Object.keys(obj) || [];
}

const bookitems2BookData = (bookitems) => {
  const bookData = []; 
  (bookitems || []).forEach(book_item => {
    const existIndex = bookData.findIndex(x => `${x.book_id}` === `${book_item.book_id}`);
    if (existIndex !== -1) {
      let q = bookData[existIndex].quantity;
      bookData[existIndex].quantity = ++q;
      bookData[existIndex].total_rent_cost += book_item.book.rent_cost;
    } else {
      bookData.push({
        ...book_item.book,
        quantity: 1,
        total_rent_cost: book_item.book.rent_cost
      });
    }
  });

  return bookData;
}


export {
    getEnumKeyWithValue,
    getEnumKeys,
    bookitems2BookData,
}