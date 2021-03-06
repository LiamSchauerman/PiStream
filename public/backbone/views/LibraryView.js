var LibraryView = Backbone.View.extend({
	tagName: 'ul',
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.children().detach();

	    this.$el.append(
	      this.collection.map(function(video){
	        return new LibraryEntryView({model: video}).render();
	      })
	    );
	}
})