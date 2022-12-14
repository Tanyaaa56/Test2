let question_arr = ['Одна з найвідоміших різдвяних пісень — це "Щедрик", світ знає її як "Carol of the Bells" або "Ring Christmas Bells". Яким українським композитором записана ця пісня?','Перша в світі Конституція була написана в Україні в 1710 році. Хто був її автором?','Найбільший у світі літак АН-225 «Мрія» за один політ встановив 124 рекорди, взявши на борт вантаж у','Найдовший музичний інструмент у світі — це українська ... її довжина може досягати чотирьох метрів, а її звуки чутні більш ніж за десять кілометрів.','Станція метро «Арсенальна» у Києві — найглибша у світі. Вона проходить під землею на глибині'];
let a1_arr = ["Миколою Леонтовичем","Богдан Хмельницький","170 тонн","сопілка","50 м"]
let a2_arr = ["Валерієм Антонюком","Петро Сагайдачний","253 тонни","кобза","86 м"]
let a3_arr = ["Петром Вільговським","Михайло Грушевський","267 тонн","трембіта","73 м"]
let a4_arr = ["Семеном Гулак-Артемовським","Пилип Орлик","341 тонна","бандура","105 м"]
let answer_arr = ["Миколою Леонтовичем","Пилип Орлик","353 тонни","трембіта","105 м"]
let n_right_answer_arr = [1,4,2,3,4]
let right_answers = 0;
let n_answer = 4;

question.innerHTML=question_arr[n_question.value];
a1.innerHTML = a1_arr[n_question.value];
a2.innerHTML = a2_arr[n_question.value];
a3.innerHTML = a3_arr[n_question.value];
a4.innerHTML = a4_arr[n_question.value];
answer.innerHTML = answer_arr[n_question.value];

n_right_answer = n_right_answer_arr[n_question.value];
console.log(n_question.value)
btn.addEventListener("click", f_out);
btn1.addEventListener("click", f_out1);
btn2.addEventListener("click", f_out2);
  function f_out (){
        console.log(y1.checked);
        console.log(y2.checked);
        console.log(y3.checked);
        console.log(y4.checked);

        if (y1.checked){ n_a = 1;}
        if (y2.checked){ n_a = 2;}
        if (y3.checked){ n_a = 3;}
        if (y4.checked){ n_a = 4;}
        console.log(n_a);
        
        if (n_a == n_right_answer){
        right_answers += 1;
        right_div.classList.remove("hidden");
        wrong_div.classList.add("hidden");
        console.log("n_question.value = "+n_question.value);
        console.log("n_answer = "+n_answer);
        if (n_question.value == n_answer){
            btn2.classList.add("hidden");
            let el1 = document.createElement("p");
            el1.innerHTML = "<b>"+right_answers+"</b>";
            right_div.appendChild(el1);
        }
        }
        else{
            right_answers-=1;
            right_div.classList.add("hidden");
            wrong_div.classList.remove("hidden");
            }
      }

      function f_out1 (){
        answer.classList.toggle("hidden");
        btn1.classList.toggle("opend");
      }

      function f_out2 (){
        right_div.classList.add("hidden");
        wrong_div.classList.add("hidden");
        k = Number(n_question.value);
        k+=1;
        n_question.value = k;
        console.log(n_question)
        question.innerHTML=question_arr[n_question.value];
        a1.innerHTML = a1_arr[n_question.value];
        a2.innerHTML = a2_arr[n_question.value];
        a3.innerHTML = a3_arr[n_question.value];
        a4.innerHTML = a4_arr[n_question.value];
        answer.innerHTML = answer_arr[n_question.value];
        
        n_right_answer =n_right_answer_arr[n_question.value];
        
      }