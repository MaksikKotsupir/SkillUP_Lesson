$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 2,
        nav: true,
        responsive : {
            0 : {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'https://jsonplaceholder.typicode.com/posts',
        success: function(data){
            data.forEach(function(item){
                $('#posts').append(
                    '<div data-id = "'+item.id+'">'+
                        '<h2>'+item.title+'</h2>'+
                        '<p>'+item.body+'</p>'+
                        '<button class="btn-del">Delete Post</button>'+
                    '</div>'
                );
            })
        }
    });

    $('#post-form').on('submit', function(event){
        event.preventDefault();

        var titleInput = $('.title-post').val();
        var textInput = $('.text-post').val();
        console.log(titleInput,textInput);

        $.ajax({
            type: 'POST',
            dataType: 'json',
            data: {
                title: titleInput,
                body: textInput
            },
            url: 'https://jsonplaceholder.typicode.com/posts',
            success: function(data){
                console.log(data);
                $('#posts').prepend(
                    '<div data-id = "'+data.id+'">'+
                        '<h2>'+data.title+'</h2>'+
                        '<p>'+data.body+'</p>'+
                        '<button class="btn-del">Delete Post</button>'+
                    '</div>'
                );
                $('.title-post').val('');
                $('.text-post').val('');
            }
        })
    });
    $(document).on('click','.btn-del', function(){
        var id = $(this).parent().attr('data-id');
        console.log(id);

        $.ajax({
            type: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/'+id,
            success: function(data){
                console.log(data);
                $('[data-id="'+id+'"]').remove();
            },
            error: function(data){
                alert(data);
            }
        })
    });
});