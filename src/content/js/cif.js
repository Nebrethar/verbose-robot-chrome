var CIFSDK = {
    get: function(args) {
        function setHeaders (xhr) {
            xhr.setRequestHeader('Authorization', args.token);
            xhr.setRequestHeader('Accept', 'application/vnd.cif.v3+json');
        }
        console.log(args.remote)
        xhg = $.ajax({
            url: args.remote,
            type: 'GET',
            dataType: 'json',
            success: args.success,
            error: args.error,
            beforeSend: setHeaders,
            cache: args.cache || false
        });
        console.log(xhg);

    },

    post: function(args) {
        function setHeaders(xhr) {
            xhr.setRequestHeader('Authorization', args.token);
            xhr.setRequestHeader('Accept', 'application/vnd.cif.v3+json');
        }
        console.log(JSON.stringify(args.data))
        console.log("REMOTE")
        console.log(args.remote)
        chg = $.ajax({
            url: args.remote,
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            success: args.success,
            error: args.error,
            beforeSend: setHeaders,
            data: JSON.stringify(args.data)
        });
        console.log(xhg)
    },

    ping: function(args) {
        args.remote = args.remote + '/ping/';
        this.get(args);
    },

    submit: function(args) {
        args.remote = args.remote + '/indicators/?';
        for (var i in args.data) {
               args.remote += i + '=' + args.data[i] + '&';
        }
        console.log(args.remote)
        console.log("test")
        console.log(args)
        this.get(args);
        console.log(args.data)
        this.post(args);
    },

    search: function(args) {
        console.log(args)
        args.remote = args.remote + '/indicators/?';
        for (var i in args.data) {
               if (i == 'itype') {
                  if (args.data[i] != 'any') {
                    args.remote += i + '=' + args.data[i] + '&';
                  }
               } else {
                  args.remote += i + '=' + args.data[i] + '&';
               }
        }
        args.remote = args.remote.substr(0, args.remote.length - 1);
        console.log(args.remote)
        console.log("test")
        console.log(args)
        this.get(args);
        console.log(args.data)
    }
};
