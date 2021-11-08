

        // function clicked_1() {

        //     console.log('This is done');
        // }

        let dd;
        let time_time;
        let date_date;
        


        setInterval(() => {
            
        dd = new Date();

        time_time = dd.getHours() + ':' + dd.getMinutes() + ':' + dd.getSeconds();

        date_date = dd.toLocaleDateString();

        day_day = dd.getDay();


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

        

        

        


