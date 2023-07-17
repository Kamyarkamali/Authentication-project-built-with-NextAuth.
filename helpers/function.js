const shorten=(title)=>{
    const spliteTitle=title.split(" ")
    const newTitle=`${spliteTitle[0]} ${spliteTitle[1]}`
    return newTitle
}


const calculateTotalPrice = (products) => {
    let totalPrice = 0;
    for (const product of products) {
      totalPrice += product.price * product.quantity;
    }
    return totalPrice;
  };


export {shorten,calculateTotalPrice};