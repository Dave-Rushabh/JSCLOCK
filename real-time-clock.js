

       let dd;
        let time_time;
        let date_date;
        


        setInterval(() => {
            
        dd = new Date();

        

        time_h = dd.getHours();
        time_m = dd.getMinutes();
        time_s = dd.getSeconds();

        date_day = dd.getDate();
        date_month = dd.getMonth();
        date_year = dd.getFullYear();

        day_day = dd.getDay();

        if (time_h <= 9){
            time_h = '0' + dd.getHours();
        }

        if (time_m <= 9){
            time_m = '0' + dd.getMinutes();
        }

        if (time_s <= 9){
            time_s = '0' + dd.getSeconds();
        }

        time_time = time_h + ':' + time_m + ':' + time_s;

        if (date_day <= 9){
            date_day = '0' + dd.getDate();
        }

        if (date_month <= 9){
            date_month = '0' + dd.getMonth();
        }

        if (date_year <= 9){
            time_s = '0' + dd.getSeconds();
        }



        date_date = date_day  + '/' + (date_month+1)  + '/' + date_year;


        
 

        document.getElementById('time_value').innerHTML = time_time;
        document.getElementById('date_value').innerHTML = date_date;

        if (day_day == 0){
            document.getElementById('day_value').innerHTML = 'Sunday';   
        }
        else if (day_day ==1){
            document.getElementById('day_value').innerHTML = 'Monday'; 
        }
        else if(day_day == 2){
            document.getElementById('day_value').innerHTML = 'Tuesday'; 
        }
        else if(day_day == 3){
            document.getElementById('day_value').innerHTML = 'Wednesday'; 
        }
        else if(day_day == 4){
            document.getElementById('day_value').innerHTML = 'Thursday';
        }
        else if(day_day == 5){
            document.getElementById('day_value').innerHTML = 'Friday'; 
        }
        else {
            document.getElementById('day_value').innerHTML = 'Saturday'; 
        }
            
        }, 1000);

        let maggic = document.querySelector(".btn");
        let head = document.querySelector(".text");
        let main = document.querySelector(".clock");


        function magic(){

        
            maggic.classList.toggle("btn-new");
            head.classList.toggle("text-new");
            main.classList.toggle("clock-new");
            

        }

        

        


