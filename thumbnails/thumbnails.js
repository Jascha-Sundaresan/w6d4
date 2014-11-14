(function ($){
  $.Thumbnails = function(el){
    this.$el = $(el);
    this.$activeImg = $("div.gutter-images img:first-child");
    this.activate(this.$activeImg);
    this.gutterIdx = 2;
    this.$images = $("div.gutter-images img");
    this.fillGutterImages();
    this.bindEvent();
  };
  
  $.Thumbnails.prototype.bindEvent = function () {
    this.$el.find(".gutter-images").on("click", "img", this.clickImage.bind(this));
    this.$el.find(".gutter-images").on("mouseover", "img", this.enterImage.bind(this));    
    this.$el.find(".gutter-images").on("mouseleave", "img", this.leaveImage.bind(this));
    this.$el.find(".nav:first-child").on("click", this.gutterLeft.bind(this));
    this.$el.find(".nav:last-child").on("click", this.gutterRight.bind(this));
  };
  
  $.Thumbnails.prototype.gutterLeft = function(){
    if (this.gutterIdx > 0){
      this.gutterIdx -= 1;
      this.fillGutterImages();
    }
  }
  
  $.Thumbnails.prototype.gutterRight = function(){
    if (this.gutterIdx < this.$images.length - 5){
      this.gutterIdx += 1;
      this.fillGutterImages();
    }
  }
  
  
  
  $.Thumbnails.prototype.clickImage = function(event){
      var $currentTarget = $(event.currentTarget);
      this.$activeImg = $currentTarget;
      this.activate(this.$activeImg);
    }
  
  $.Thumbnails.prototype.enterImage = function(event){
      var $currentTarget = $(event.currentTarget);
      this.activate($currentTarget);
    }
  
  $.Thumbnails.prototype.leaveImage = function () {
    this.activate(this.$activeImg);
  }
  
  $.Thumbnails.prototype.fillGutterImages = function(){
    $("div.gutter-images").empty();
    var fn = this;
      for (var i = fn.gutterIdx; i < fn.gutterIdx + 5; i++) {
        $("div.gutter-images").append(fn.$images.eq(i));
      }
  };
  
  $.Thumbnails.prototype.activate = function($img){
    var $cloneImg = $img.clone();
    $("div.active img").remove();
    $("div.active").append($cloneImg);
  };
  
  $.fn.thumbnails = function () {
    //this = $(".thumbnails")
    return this.each(function () {
      // this = nth html element
      new $.Thumbnails(this);
    });
  };
  
  
})(jQuery);