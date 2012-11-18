var FamilyView = Backbone.View.extend({
    el:"#family",
    initialize:function(){
    _.bindAll(this,"render");
        this.render();
},
    render:function(){
        alert("rendering");
        var family = this.collection;
        _.each(family.models,function(member){
            var item = $("<tr/>");
            $("<td/>").html(member.get("fname")).appendTo(item);
            $("<td/>").html(member.get("lname")).appendTo(item);
            $("<td/>").html(member.get("age")).appendTo(item);
            $("<td/>").html(member.get("sex")).appendTo(item);
            item.appendTo(this.$el);
        },this)
    }
})