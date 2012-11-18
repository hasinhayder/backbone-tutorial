var Humans = Backbone.Collection.extend({
    model:Human,
    males:function(){
        return this.filter(function(Human){
            return Human.get("sex")=="M";
        },this)
    }
});