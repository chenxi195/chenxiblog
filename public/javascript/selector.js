function Selector(op){
    this.data = op.data || {};
    this.elements = op.elements || [];
    this.selected = op.selected || [];
}

Selector.prototype.init = function(){
    this.dataJson = this.setJsonFromData(this.data);

    for(var i=0; i<this.elements.length; i++){
        this.render($('#'+this.elements[i]), this.data);
    }
};

Selector.prototype.render = function(dom, data){
    var self = this;
    var html = '';

    $(data).each(function(i, item){
        var id = item.id;
        html += '<div class="child" data-id="'+id+'"><input name="category" type="checkbox" '+(self.selected.indexOf(id)>-1 ? 'checked' : '')+'/>'+item.name+' (id: '+id+')'+'</div>';
    });
    dom.html(html);

    dom.find('.child').on('click', function(e){
        var id = $(this).data('id');
        self.initItem($(this), self.getDataFromJson(id));

        e.stopPropagation();
    });

    dom.find('input').on('change', function(e){
        var isChecked = $(this).is(':checked');
        var id = $(this).parent().data('id');
        self.setSelected(id);

        e.preventDefault();
        e.stopPropagation();
    });
};

Selector.prototype.initItem = function(dom, obj){
    var self = this;
    var childBox = dom.find('.child_box');
    var data = obj.item;

    if(childBox.length){
        childBox.toggle();
    }else{
        if(!data.length){return;}

        dom.append('<div class="child_box"></div>');
        self.render(dom.find('.child_box'), data);
    }
};

Selector.prototype.setJsonFromData = function(arr){
    var json = {};
    var makeJson = function(data){
        $(data).each(function(i, item){
            json[item.id] = item;
            if(item.item.length){
                makeJson(item.item);
            }
        });
    };

    makeJson(arr);
    return json;
};

Selector.prototype.getDataFromJson = function(id){
    return this.dataJson[id];
};

Selector.prototype.setSelected = function(id){
    if(this.selected.indexOf(id) > 0){
        //this.selected.splice(id, -this.selected.length);
    }else{
        this.selected.push(id);
    }

    var str = this.selected.join(', ');
    $('#selectedInput').val(str);
}