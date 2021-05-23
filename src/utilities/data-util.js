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

const preProcessReservation = (reservation) => {
  const bookitems = reservation && reservation.book_items;
  const bookData = []; 
  (bookitems || []).forEach(book_item => {
    const existIndex = bookData.findIndex(x => `${x.book_id}` === `${book_item.book_id}`);
    if (existIndex !== -1) {
      bookData[existIndex].quantity++;
      bookData[existIndex].total_rent_cost += book_item.book.rent_cost;
    } else {
      bookData.push({
        ...book_item.book,
        quantity: 1,
        total_rent_cost: book_item.book.rent_cost
      });
    }
  });

  const totalRentFee = bookData.reduce((x, item) => x + (item?.total_rent_cost || 0), 0);
  let deposit = undefined;
  if (totalRentFee <= 50)
    deposit = totalRentFee * 2;
  else if (50 < totalRentFee && totalRentFee <= 100)
    deposit = totalRentFee * 3;
  else if (100 < totalRentFee && totalRentFee <= 500)
    deposit = totalRentFee * 5;
  else
    deposit = totalRentFee * 10;
  
  reservation.total_rent_fee = totalRentFee;
  reservation.deposit = deposit;
  reservation.receive_money = deposit + totalRentFee;
  reservation.book_items_sum = bookData;

  return reservation;
}

const getFineDateLate = (reservation) => {
  const dateLate = reservation && reservation.date_late || 0;
  const totalFee = reservation.total_rent_fee || 0;
  
  if (!dateLate) return 0;

  if (totalFee <= 50) return dateLate * 10;

  if (50 < totalFee && totalFee <= 100) return dateLate * 20;

  if (100 < totalFee && totalFee <= 500) return dateLate * 30;

  if (totalFee > 500) return dateLate * 50;
} 

export {
    preProcessReservation,
    getEnumKeyWithValue,
    getEnumKeys,
    getFineDateLate,
}