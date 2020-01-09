<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>Конвертеры единиц</title>
</head>
<?php
    $mINkm = 0.62137;
    $kmINm = 1.60934;
    $gINl = 0.26417;
    $lINg = 3.78541;
    $agINl = 0.21997;
    $lINag = 4.54609;
    $agINg = 0.83267;
    $gINag = 1.20095;

      $inputData = floatval($_GET['inputData']);
      $operation = intval($_GET['operation']);
      $selected1 = "";
      $selected2 = "";
      $selected3 = "";
      $selected4 = "";
      $selected5 = "";
      $selected6 = "";
      $selected7 = "";
      $selected8 = "";

      if(!($inputData>0)){
$data1 = 0;
$data2 = 0;
$data3 = 0;
$data4 = 0;
$data5 = 0;
$data6 = 0;
$data7 = 0;
$data8 = 0;
} else

if($operation == 1){
$selected1 = "selected";
$data1 = $inputData; //л на км
$data2 = $inputData*10; //л на 10 км
$data3 = $inputData*100;//л на 100 км
$data4 = 1/$inputData; // км на л
$data5 = $mINkm/($inputData*$gINl); // миль на галлон (сша)
$data6 = 100*($inputData*$gINl)/$mINkm; //галлонов на 100 миль (сша)
$data7 = $mINkm/($inputData*$agINl); // миль на галлон (англия)
$data8 = 100*($inputData*$agINl)/$mINkm; //галлонов на 100 миль (англия)
} else if($operation == 2){
$selected2 = "selected";
$data1 = $inputData/10; //л на км
$data2 = $inputData; //л на 10 км
$data3 = $inputData*10; //л на 100 км
$data4 = 10/$inputData; // км на л
$data5 = $mINkm*10/($inputData*$gINl); // миль на галлон (сша)
$data6 = 10*($inputData*$gINl)/$mINkm; //галлонов на 100 миль (сша)
$data7 = $mINkm*10/($inputData*$agINl); // миль на галлон (англия)
$data8 = 10*($inputData*$agINl)/$mINkm; //галлонов на 100 миль (англия)
} else if($operation == 3){
$selected3 = "selected";
$data1 = $inputData/100; //л на км
$data2 = $inputData/10; //л на 10 км
$data3 = $inputData; //л на 100 км
$data4 = 100/$inputData; // км на л
$data5 = $mINkm*100/($inputData*$gINl); // миль на галлон (сша)
$data6 = ($inputData*$gINl)/$mINkm; //галлонов на 100 миль (сша)
$data7 = $mINkm*100/($inputData*$agINl); // миль на галлон (англия)
$data8 = ($inputData*$agINl)/$mINkm; //галлонов на 100 миль (англия)
} else if($operation == 4){
$selected4 = "selected";
$data1 = 1/$inputData; //л на км
$data2 = 10/$inputData; //л на 10 км
$data3 = 100/$inputData; //л на 100 км
$data4 = $inputData; // км на л
$data5 = $inputData*$lINg/$kmINm; // миль на галлон (сша)
$data6 = $kmINm*100/($inputData*$lINg); //галлонов на 100 миль (сша)
$data7 = $inputData*$lINag/$kmINm; // миль на галлон (англия)
$data8 = $kmINm*100/($inputData*$lINag); //галлонов на 100 миль (англия)
} else if($operation == 5){
$selected5 = "selected";
$data1 = $lINg/($inputData*$kmINm); //л на км
$data2 = $lINg*10/($inputData*$kmINm); //л на 10 км
$data3 = $lINg*100/($inputData*$kmINm); //л на 100 км
$data4 = $inputData*$kmINm/$lINg; // км на л
$data5 = $inputData; // миль на галлон (сша)
$data6 = 100/$inputData; //галлонов на 100 миль (сша)
$data7 = $inputData*$gINag; // миль на галлон (англия)
$data8 = 100/($inputData*$gINag); //галлонов на 100 миль (англия)
}
else if($operation == 6){
$selected6 = "selected";
$data1 = $inputData*$lINg/$kmINm/100; //л на км
$data2 = $inputData*$lINg/$kmINm/10; //л на 10 км
$data3 = $inputData*$lINg/$kmINm; //л на 100 км
$data4 = $kmINm*100/$inputData/$lINg; // км на л
$data5 = 100/($inputData); // миль на галлон (сша)
$data6 = $inputData; //галлонов на 100 миль (сша)
$data7 = 100/($inputData*$agINg); // миль на галлон (англия)
$data8 = $inputData*$agINg; //галлонов на 100 миль (англия)
} else if($operation == 7){
$selected7 = "selected";
$data1 = $lINag/$inputData/$kmINm; //л на км
$data2 = 10*$lINag/$inputData/$kmINm; //л на 10 км
$data3 = 100*$lINag/$inputData/$kmINm; //л на 100 км
$data4 = $inputData*$kmINm/$lINag; // км на л
$data5 = $inputData*$agINg; // миль на галлон (сша)
$data6 = 100/$inputData/$agINg; //галлонов на 100 миль (сша)
$data7 = $nputData; // миль на галлон (англия)
$data8 = 100/$inputData; //галлонов на 100 миль (англия)
}
else if($operation == 8){
$selected8 = "selected";
$data1 = $inputData*$lINag/$kmINm/100; //л на км
$data2 = $inputData*$lINag/$kmINm/10; //л на 10 км
$data3 = $inputData*$lINag/$kmINm; //л на 100 км
$data4 = 100*$kmINm/$inputData/$lINag; // км на л
$data5 = 100/$inputData*$agINg; // миль на галлон (сша)
$data6 = $inputData*$gINag; //галлонов на 100 миль (сша)
$data7 = 100/$inputData; // миль на галлон (англия)
$data8 = $inputData; //галлонов на 100 миль (англия)
}
?>
<body>
<div id="content">
    <form action="" method="get">
        <h1>Конвертер расхода топлива<br>PHP</h1>
        <div id="label-inputData">Исходные данные:</div>
        <div id='form-data'>
            <input type="text" name="inputData" id="inputData" value="<?echo $inputData; ?>" />
            <select id='selectKm' name="operation">
                <option disabled>Метрический</option>
                <option value="1" <?echo $selected1;?> >Литров на км</option>
                <option value="2" <?echo $selected2;?>>Литров на 10 км</option>
                <option value="3" <?echo $selected3;?>>Литров на 100 км</option>
                <option value="4" <?echo $selected4;?>>Километров на литр</option>
                <option disabled>US (США)</option>
                <option value="5" <?echo $selected5;?>>Миль на галон</option>
                <option value="6" <?echo $selected6;?>>Галонов на 100 миль</option>
                <option disabled>UK (Англия)</option>
                <option value="7" <?echo $selected7;?>>Миль на галон</option>
                <option value="8" <?echo $selected8;?>>Галонов на 100 миль</option>
            </select>
        </div>
        <div id='result'>
            <p class='label-result'><b>Метрический:</b></p>
            <div class='poles-result'>
                <div>
                    <div class='data-result' id='1'>
                        <?
                                 echo $data1;
                            ?>
                    </div><span>Литров на км</span>
                </div>
                <div>
                    <div class='data-result' id='2'>
                        <?
                                 echo $data2;
                            ?>
                    </div><span>Литров на 10 км</span>
                </div>
                <div>
                    <div class='data-result' id='3'>
                        <?
                                 echo $data3;
                            ?>
                    </div><span>Литров на 100 км</span>
                </div>
                <div>
                    <div class='data-result' id='4'>
                        <?
                                 echo $data4;
                            ?>
                    </div><span>Километров на литр</span>
                </div>
            </div>
            <hr>
            <p class='label-result'><b>US (США):</b></p>
            <div class='poles-result'>
                <div>
                    <div class='data-result' id='5'>
                        <?
                                 echo $data5;
                            ?>
                    </div><span>Миль на галон</span>
                </div>
                <div>
                    <div class='data-result' id='6'>
                        <?
                                 echo $data6;
                            ?>
                    </div><span>Галонов на 100 миль</span>
                </div>
            </div>
            <hr>
            <p class='label-result'><b>UK (Англия):</b></p>
            <div class='poles-result'>
                <div>
                    <div class='data-result' id='7'>
                        <?
                                 echo $data7;
                            ?>
                    </div><span>Миль на галон</span>
                </div>
                <div>
                    <div class='data-result' id='8'>
                        <?
                                 echo $data8;
                            ?>
                    </div><span>Галонов на 100 миль</span>
                </div>
            </div>
        </div>
        <input type="submit" id="but" name="submit" value="Рассчитать"/>
    </form>
</div>
</body>
</html>