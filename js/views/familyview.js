var FamilyView = Backbone.View.extend({
    el:"#family",

    initialize:function(){
    _.bindAll(this,"render","hover");
        this.render();
},
    events:{
        "hover tr":"hover"
    },
    render:function(){
        var template= _.template($("#member").html());
        var family = this.collection;
        _.each(family.models,function(member){
            $(this.el).append(template(member.toJSON()));
        },this);
    },
    hover:function(e){
        $("tr.member").css("backgroundColor","#FFF");
        $(e.currentTarget).css("backgroundColor","#DDD");
    }
})