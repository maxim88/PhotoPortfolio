
<script type="text/template" id="edit-list-template">
   <form class="edit-user-form">
       <legend><%= user?"Edit":"Create"%> User</legend>
       <hr/>
       <label>First Name</label>
       <input type="text" name="FirstName" value="<%= user?user.get('FirstName'):''%>"  />
       <label>Last Name</label>
       <input type="text" name="LastName" value="<%= user?user.get('LastName'):''%>" />
       <td>
          <input type="hidden" name="Id" value="<%=user.get('Id')%>" />     
       </td>   
       <hr/>
       <button type="submit" class="btn"><%= user?"Edit":"Create"%></button>
       <%if (user){%>
       <button class="delete">Delete</button> 
        <%};%> 
   </form>
</script>

<script>
    var UserCollection = Backbone.Collection.extend({url:'/api/Users'});

var serializeObject = function (arr) { 
    var o = {};
    var a = arr.serializeArray();
    $.each(a, function() {
        if (o[this.name] != undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });

    return o;
};
    
var User = Backbone.Model.extend({ urlRoot: "/api/Users" });
    
var UserList = Backbone.View.extend({
    el: '.page',
    render: function () {
        $.ajaxPrefilter(function (options, originalOptions, jqXHR) { options.url = "http://localhost:59397" + options.url; });

        var users = new UserCollection();
        var that = this;
        users.fetch({
            success: function() {
                var template = _.template($('#users-list-template').html(), {users:users.models});
                that.$el.html(template);
            }
        });
    }
});
    
var EditUser = Backbone.View.extend({
    el: '.page',
       
    render: function (options) {
        var that = this;  
        if (options.id) {
            console.log('options is : ' + options);
            console.log('options id is : ' + options.id);
            var user = new User({ id: options.id });
            that.user = user;
            user.fetch({
                success: function (user) {
                    console.log('user is : ' + user);
                    console.log('firstName is : ' + user.FirstName + '  -  ' + user.get('FirstName'));
                        
                    var template2 = _.template($('#edit-list-template').html(), { user: user });
                    that.$el.html(template2);
                }});
        } else {
            var template = _.template($('#edit-list-template').html(), { user: null });
            this.$el.html(template);
        }
    },
        
    events: { 'submit .edit-user-form': 'saveUser', 'click .delete':'deleteUser' },
    deleteUser: function(ev) {
        this.user.destroy({ success: function () { router.navigate('', { trigger: true }); } });
        return false;
    },
        
    saveUser: function (ev) {
        var userData = serializeObject($(ev.currentTarget));
        var user = new User();
        user.save(userData, {
            success: function () {
                router.navigate('', { trigger: true });
            }
        });
        return false;
    },
});

var Router = Backbone.Router.extend({
    routes: { '': 'home', 'new': 'editUser', 'edit/:id': 'editUser' }
});

var userList = new UserList();
var editUser = new EditUser();

var router = new Router();
router.on('route:home', function () {
    userList.render();
});
router.on('route:editUser', function (id) {
    console.log('id is : ' + id);
    editUser.render({id : id});
});

Backbone.history.start();
</script>
