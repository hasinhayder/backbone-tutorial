var AppRouter = Backbone.Router.extend({
    routes:{
        "":"start"
    },
    start:function(){

        var john = new Human({fname:"John",lname:"Doe",sex:"M",age:34});
        var jane = new Human({fname:"Jane",lname:"Doe",sex:"F",age:27});
        var jim = new Human({fname:"Jim",lname:"Doe",sex:"M",age:5});

        var family = new Humans([john,jane,jim]);
        alert("Total Members in the Family: "+family.size());
        var males = family.males();
        alert("Total Number of Males: "+males.length);
        _.each(males,function(male){
            alert(male.get("fname"));
        });
        var fv = new FamilyView({collection:family});
    }
});
$(document).ready(function(){
    var app = new AppRouter();
    Backbone.history.start({pushState:true});
})