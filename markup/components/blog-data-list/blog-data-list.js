export const blogSubscription = () => {
  const subscribeWrap = $('<li class="blog-data__item subscribe-to"><p>subscribe to our newsletter</p><a class="btn btn--orange" href="#go-to-subscribe">subscribe</a></li>');
  const blogItem = $('.blog-data__item:nth-child(2)');
  if (subscribeWrap) {
    console.log(subscribeWrap);
    blogItem.after(subscribeWrap);
  }
}
