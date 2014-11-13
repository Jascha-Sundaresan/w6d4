(function ($) {
  $.Tabs = function (el) {
    this.$el = $(el);
    this.$contentTabs = $("#content-tabs");
    this.$activeTab = $("div .active");
    this.bindEvents(); 
  };

  $.fn.tabs = function () {
    return this.each(function () {
      new $.Tabs(this);
    });
  };


  $.Tabs.prototype.clickTab = function(event){
    event.preventDefault();
    var currentTarget = event.currentTarget;
    var $currentTarget = $(currentTarget);
    $("a.active").removeClass("active");
    this.$activeTab.removeClass("active");
    this.$activeTab.addClass("transitioning");
    var fn = this;    
    var id = $currentTarget.attr("href");
    this.$activeTab.one("transitionend", function(){
      fn.$activeTab.removeClass("transitioning");
      fn.$activeTab = fn.$contentTabs.find(id);
      fn.$activeTab.addClass("active transitioning");
      // fn.$activeTab.addClass("transitioning");
      setTimeout(function(){
        fn.$activeTab.removeClass("transitioning");
      }, 0);
    })
    $currentTarget.addClass("active");
  }
  
  
  $.Tabs.prototype.bindEvents = function(){
    var fn = this;
    $("a").on("click", this.clickTab.bind(this));
  }
  
})(jQuery);


