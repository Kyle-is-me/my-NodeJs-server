$(()=>{
   $('#tbody').on('click','a:last-child',function(){
      // 删除确认
      if(!confirm('确认删除吗？')) return;
      let id = $(this).attr('data-id');
      let _this = this;
      $.ajax({
         type:'get',
         url:'http://127.0.0.1:8080/deleteHero',
         data:{id},
         success:function(res){
            if(res.code === 200){
               $(_this).parents('tr').remove();
            }
         }
      })
   })

})