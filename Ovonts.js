function parseProduct(product) {
  return {
    sku: product?.sku,
    title: product?.title,
    desc: product?.desc,
    brand: product?.brand,
    price: product?.price,
    offered_price: product?.offeredPrice,
    currency: product?.currency,
    mainCategory: product?.category?.mainCategory,
    subCategory1: product?.category?.subCategory,
    subCategory2: product?.category?.mainSubCategory,
    url: product?.productUrl,
    quantity: product?.quantity,
    variant: product?.variant,
    color: product?.color,
    size: product?.size,
  };
}

function parseCheckout(checkoutObj) {
  return {
    cartId: checkoutObj?.cartId,
    checkoutId: checkoutObj?.checkoutId,
    orderId: checkoutObj?.orderId,
    total_amount: checkoutObj?.totalAamount,
    payable_amount: checkoutObj?.payableAamount,
    promoCode: checkoutObj?.promoCode,
  };
}

function parseOrder(orderObj) {
  return {
    orderId: orderObj?.orderId,
    gross_amount: orderObj?.grossAmount,
    taxable_amount: orderObj?.taxableAmount,
    payable_amount: orderObj?.payableAmount,
    total_amount: orderObj?.totalAmount,
    transactionId: orderObj?.transactionId,
    offerId: orderObj?.offerId,
    promoApplied: orderObj?.promoApplied,
  };
}

function parseRegister(registerObj) {
  return {
    userEmail: registerObj?.email,
    userPhone: registerObj?.phone,
    userName: registerObj?.name,
    userAge: registerObj?.age,
    userDob: registerObj?.dob,
  };
}

function parseLogin(loginObj) {
  return {
    userId: loginObj?.id,
    userName: loginObj?.name,
    userPhone: loginObj?.phone,
  };
}

function parseSearch(searchObj) {
  return {
    categories: searchObj?.categories,
    value: searchObj?.value,
    rating: searchObj?.rating,
    min_price: searchObj?.min_price,
    max_price: searchObj?.max_price,
    brands: searchObj?.brands,
    discount: searchObj?.discount,
    offer: searchObj?.offer,
  };
}

//1
function productViewed(product) {
  const productDetails = parseProduct(product);
  try {
    window.Ovonts.q.push([
      "add_event",
      {
        key: "productViewed",
        segmentation: {
          userEmail: window.ovontsUserEmail,
          userName: window.ovontsUserName,
          userPhone: window.ovontsUserMobile,
          userDob: window.ovontsUserDob,
          userFbId: window.ovontsUserFbId,
          userGoogleId: window.ovontsUserGoogleId,
          userGoogleAdId: window.ovontsUserGoogleAdId,
          userHardwareId: window.ovontsUserHardwareId,
          affiliateId: window.affiliateId,
          campaignId: window.campaignId,
          products: [productDetails],
        },
      },
    ]);
  } catch (error) {
    console.log(error);
  }
}
//2
function productAddedToCart(product, cartId = null) {
  const productDetails = parseProduct(product);
  try {
    window.Ovonts.q.push([
      "add_event",
      {
        key: "productAddedToCart",
        segmentation: {
          userEmail: window.ovontsUserEmail,
          userName: window.ovontsUserName,
          userPhone: window.ovontsUserMobile,
          userDob: window.ovontsUserDob,
          userFbId: window.ovontsUserFbId,
          userGoogleId: window.ovontsUserGoogleId,
          userGoogleAdId: window.ovontsUserGoogleAdId,
          userHardwareId: window.ovontsUserHardwareId,
          campaignId: window.campaignId,
          affiliateId: window.affiliateId,
          cartId: cartId,
          products: [productDetails],
        },
      },
    ]);
  } catch (error) {
    console.log(error);
  }
}
//3
function productAddedToWishlist(wishlistId = null, product) {
  const productDetails = parseProduct(product);
  try {
    window.Ovonts.q.push([
      "add_event",
      {
        key: "productAddedToWishlist",
        segmentation: {
          userEmail: window.ovontsUserEmail,
          userName: window.ovontsUserName,
          userPhone: window.ovontsUserMobile,
          userDob: window.ovontsUserDob,
          userFbId: window.ovontsUserFbId,
          userGoogleId: window.ovontsUserGoogleId,
          userGoogleAdId: window.ovontsUserGoogleAdId,
          userHardwareId: window.ovontsUserHardwareId,
          campaignId: window.campaignId,
          affiliateId: window.affiliateId,
          wishlistId: wishlistId,
          products: [productDetails],
        },
      },
    ]);
  } catch (error) {
    console.log(error);
  }
}
//4
function cartViewed(product, cartId = null) {
  const productDetails = parseProduct(product);
  try {
    window.Ovonts.q.push([
      "add_event",
      {
        key: "cartViewed",
        segmentation: {
          userEmail: window.ovontsUserEmail,
          userName: window.ovontsUserName,
          userPhone: window.ovontsUserMobile,
          userDob: window.ovontsUserDob,
          userFbId: window.ovontsUserFbId,
          userGoogleId: window.ovontsUserGoogleId,
          userGoogleAdId: window.ovontsUserGoogleAdId,
          userHardwareId: window.ovontsUserHardwareId,
          campaignId: window.campaignId,
          affiliateId: window.affiliateId,
          cartId: cartId,
          products: [productDetails],
        },
      },
    ]);
  } catch (error) {
    console.log(error);
  }
}
//5
function orderPlaced(products, orderObj) {
  let parsedProduct = [];
  let order = parseOrder(orderObj);
  try {
    products.map((p) => {
      parsedProduct.push(parseProduct(p));
    });
    window.Ovonts.q.push([
      "add_event",
      {
        key: "orderPlaced",
        segmentation: {
          userEmail: window.ovontsUserEmail,
          userName: window.ovontsUserName,
          userPhone: window.ovontsUserMobile,
          userDob: window.ovontsUserDob,
          userFbId: window.ovontsUserFbId,
          userGoogleId: window.ovontsUserGoogleId,
          userGoogleAdId: window.ovontsUserGoogleAdId,
          userHardwareId: window.ovontsUserHardwareId,
          campaignId: window.campaignId,
          affiliateId: window.affiliateId,
          orderId: order.orderId,
          grossAmount: order.gross_amount,
          taxableAmount: order.taxable_amount,
          payableAmount: order.payable_amount,
          totalAmount: order.total_amount,
          transactionId: order.transactionId,
          offerId: order.offerId,
          promoApplied: order.promoApplied,
          products: [parsedProduct],
        },
      },
    ]);
  } catch (error) {
    console.log(error);
  }
}
//6
function checkoutStarted(products, chekoutObj) {
  const checkout = parseCheckout(chekoutObj);
  let parsedProduct = [];
  try {
    products.map((p) => {
      parsedProduct.push(parseProduct(p));
    });
    window.Ovonts.q.push([
      "add_event",
      {
        key: "checkoutStarted",
        segmentation: {
          userEmail: window.ovontsUserEmail,
          userName: window.ovontsUserName,
          userPhone: window.ovontsUserMobile,
          userDob: window.ovontsUserDob,
          userFbId: window.ovontsUserFbId,
          userGoogleId: window.ovontsUserGoogleId,
          userGoogleAdId: window.ovontsUserGoogleAdId,
          userHardwareId: window.ovontsUserHardwareId,
          campaignId: window.campaignId,
          affiliateId: window.affiliateId,
          cartId: checkout?.cartId,
          checkoutId: checkout?.checkoutId,
          orderId: checkout?.orderId,
          totalAmount: checkout?.total_amount,
          payableAamount: checkout?.payable_amount,
          promoCode: checkout?.promoCode,
          products: [parsedProduct],
        },
      },
    ]);
  } catch (error) {
    console.log(error);
  }
}
//7
function productRemovedFromCart(cartId = null) {
  try {
    window.Ovonts.q.push([
      "add_event",
      {
        key: "productRemovedFromCart",
        segmentation: {
          userEmail: window.ovontsUserEmail,
          userName: window.ovontsUserName,
          userPhone: window.ovontsUserMobile,
          userDob: window.ovontsUserDob,
          userFbId: window.ovontsUserFbId,
          userGoogleId: window.ovontsUserGoogleId,
          userGoogleAdId: window.ovontsUserGoogleAdId,
          userHardwareId: window.ovontsUserHardwareId,
          campaignId: window.campaignId,
          affiliateId: window.affiliateId,
          cartId: cartId,
        },
      },
    ]);
  } catch (error) {
    console.log(error);
  }
}

//8
function register(registerObj) {
  ovontsSetUserTraits(registerObj);

  try {
    window.Ovonts.q.push([
      "add_event",
      {
        key: "register",
        segmentation: {
          campaignId: window.campaignId,
          affiliateId: window.affiliateId,
          userEmail: window.ovontsUserEmail,
          userPhone: window.ovontsUserMobile,
          userName: window.ovontsUserName,
          userAge: window.ovontsUserAge,
          userDob: window.ovontsUserDob,
        },
      },
    ]);
  } catch (error) {
    console.log(error);
  }
}
//9
function login(loginObj) {
  const loginObject = parseLogin(loginObj);
  ovontsSetUserTraits(loginObj);
  try {
    window.Ovonts.q.push([
      "add_event",
      {
        key: "login",
        segmentation: {
          campaignId: window.campaignId,
          affiliateId: window.affiliateId,
          userId: loginObject?.userId,
          userName: window.ovontsUserName,
          userPhone: window.ovontsUserMobile,
          userAge: window.ovontsUserAge,
          userDob: window.ovontsUserDob,
        },
      },
    ]);
  } catch (error) {
    console.log(error);
  }
}

function search(search) {
  const searchObj = parseSearch(search);
  try {
    window.Ovonts.q.push([
      "add_event",
      {
        key: "search",
        segmentation: {
          campaignId: window.campaignId,
          affiliateId: window.affiliateId,
          search_categories: searchObj?.categories,
          search_value: searchObj?.value,
          seach_product_rating: searchObj?.rating,
          search_min_price: searchObj?.min_price,
          search_max_price: searchObj?.max_price,
          search_brands: searchObj?.brands,
          search_discount: searchObj?.discount,
          search_offer: searchObj?.offer,
        },
      },
    ]);
  } catch (error) {
    console.log(error);
  }
}

function recordEvent(eventName, data) {
  console.log(eventName, data);
  try {
    window.Ovonts.q.push([
      "add_event",
      {
        key: eventName,
        segmentation: {
          userEmail: window.ovontsUserEmail,
          userName: window.ovontsUserName,
          userPhone: window.ovontsUserMobile,
          userDob: window.ovontsUserDob,
          userFbId: window.ovontsUserFbId,
          userGoogleId: window.ovontsUserGoogleId,
          userGoogleAdId: window.ovontsUserGoogleAdId,
          userHardwareId: window.ovontsUserHardwareId,
          campaignId: window.campaignId,
          affiliateId: window.affiliateId,
          data,
        },
      },
    ]);
  } catch (error) {
    console.log(error);
  }
}
