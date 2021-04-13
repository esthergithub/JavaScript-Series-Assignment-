// After loading the DOM, execute the processing in function()
$(document).ready(function () {
  // 「国語、英語、数学、理科、社会」の点数（入力値）を取得して合計点と平均点を出すロジック
  function score_indicate(){
    // In the variable "subject_points"
      // Substitute the array of [Japanese score, English score, math score, science score, social score].
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    // In the variable "sum"
    // Add [Japanese score, English score, math score, science score, social score] respectively.
    // Hint! Take out the arrays one by one and add them.
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    // another way to calculate sum is as follows:
    // let sum =subject_points. the reduce(function( sum, subject_points) {return sum + subject_points;}, 0);
    // Output the variable "sum" (total score) to "total score:" (id = "sum_indicate").
    $("#sum_indicate").text(sum);
    // In the variable "average"
    // Calculate the average value and substitute. (Total score of the number you want to average (sum) / Total number)
    let average = sum / subject_points.length;
    $("#average_indicate").text(average);
    // Hint! Use the length method to find the total number. (length method: Method to get the length of the string, the number of elements in the array, etc.)
  };
  // 平均点数を取得し、取得した平均点数から「A、B、C、D」にGrade分けするロジックを記述する。
    function get_achievement() {
      // In the variable "averageIndicate"
      // Get the average score from id = "average_indicate" on HTML and substitute it.
      let averageIndicate = $("#average_indicate").text();
      console.log(averageIndicate)
      // If "averageIndicate" is 80 or higher, "A" is returned.
      if (averageIndicate >= 80) {
        return "A";
      }
      if (averageIndicate >= 60) {
      return "B";
    }
    if (averageIndicate >= 40){
      return "C";
    }
    else {
      return "D";
    }
      // If "averageIndicate" is 60 or more, "B" is returned.
      // If "averageIndicate" is 40 or more, "C" is returned.
      // もし「averageIndicate」がそれ以外なら"D"を返します。
    };
    // 各教科の点数を取得し、取得した点数から「Pass、不Pass」の判断を下すロジックを作ります。
    function get_pass_or_failure(){
    let subject_points = [Number($('#national_language').val()),
                         Number($('#english').val()),
                         Number($('#mathematics').val()),
                         Number($('#science').val()),
                         Number($('#society').val())
                      ];
    let number = subject_points.length;
    let judge = "Pass";
    for (let i=0; i<number; i++){
      if (subject_points[i]<60){
        judge = "Fail";
        break;
      }
   }
       return judge;
  };
        // Create the final judge logic.
        function judgement(){
      let achievement = get_achievement();
      let pass_or_failure =  get_pass_or_failure();
  $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">Your grades is ${achievement}. It is a ${pass_or_failure}</label>`);
};
  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
     });
  $('#btn-evaluation').click(function() {
    $("#evaluation").text(get_achievement());
  });
  $('#btn-judge').click(function() {
  $("#judge").text(get_pass_or_failure());
 });
 $('#btn-declaration').click(function() {
  $("#declaration").text(judgement());
  });
});
