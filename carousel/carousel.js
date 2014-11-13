(function ($){
  $.Carousel = function(el){
    this.$el = $(el);
    this.activeIdx = 0;
    this.$images = this.$el.find("div.items img")
    this.$images.eq(this.activeIdx).addClass("active");
    this.bindEvents();
  }
  
  $.fn.carousel = function () {
    return this.each(function () {
      new $.Carousel(this);
    });
  };
  
  $.Carousel.prototype.bindEvents = function(){
    var fn = this;
    $("a").on("click", this.clickCarousel.bind(this));
  }
  
  $.Carousel.prototype.clickCarousel = function(event){
    var fn =this;
    event.preventDefault();
    var $currentTarget = $(event.currentTarget);
    switch($currentTarget.attr("class")){
    case ("slide-left"):
      fn.slide(1);
      break;
    case ("slide-right"):
      fn.slide(-1);
      break;
    }
  }
  
  $.Carousel.prototype.slide = function(dir){
    this.$images.eq(this.activeIdx).removeClass("active");
    this.activeIdx += dir;
    var wrapper = this.$images.length - 1;
    if(this.activeIdx > wrapper){
      this.activeIdx = 0;
    }else if(this.activeIdx < 0){
      this.activeIdx = wrapper;
    }
    this.$images.eq(this.activeIdx).addClass("active");
    
  }
  
})(jQuery);