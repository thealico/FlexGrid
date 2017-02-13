# Flexbox Grid
Bu grid modeli 12 sütun üzerine [flexbox](http://www.w3schools.com/css/css3_flexbox.asp) tekniği ile inşa edilmiştir. Css üreticisi olarak Sass, görev yöneticisi olarakta Gulp tercih edilmiştir. Media değer aralığı seçenekleri aşağıda görülen tablodaki gibidir.

Bu listede genel kullanıma göre **ms** adlı beşinci bir ufak aralık görmektesiniz. Bu aralık mobilin yatay ve dikey kullanımına göre farklı özelleştirebilme ihtiyacından doğmuştur. Bunu tercih etmeseniz [grid.scss](https://github.com/thealico/flexboxgrid/blob/master/src/style/grid.scss) dosyasından ms etiketiyle dönen değerleri disable etmeniz yeterli olacaktır.


| Media Değerleri  | MS <br> ( 376 > )  | XS <br> ( 568 > ) | SM <br> ( 768 > )  |   MD <br> ( 1024 > )  |  LG <br> ( 1280 > )  |
| --- | --- | --- | --- | --- | --- | --- |
| Class Prefix         |   -ms   | -xs   |  -sm  |  -md  |  -lg  |
| Sass Media Değişken  |   $gl-ms  |  $gl-xs  |  $gl-sm  |  $gl-md  | $gl-lg  |

Grid sistemindeki  satırlar ve sütunların class etiketleri aşina olduğumuz şekide  **row** ve **col** olarak atadık. 

| Değer               | Media | Açıklama |
| ------------------- | ----- | ------------------------ |
| col-top             | Var   | Sütunu üste konumlar |
| col-middle          | Var   | Sütunu dikeyde ortaya konumlar |
| col-bottom          | Var   | Sütunu alta konumlanır |
| col-first           | Var   | Sütunu sol başa konumlar |
| col-last            | Var   | Sütunu sağ sona konumlar |
| col-ns              | Yok   | Sütunun padding boşluklarını sıfırlar |



| Değer               | Media Destek | Açıklama |
| ------------------- | ----- | ------------------------ |
| center              | Var   | Sütunları yatayada ortalar|
| start               | Var   | Sütünları sola yaslı sıralar |
| between             | Var   | Sütünları sol ve sağa doğru sonlandırarak sıralar |
| around              | Var   | Sütunları merkeden ortalayarak sağa ve sola doğru sıralar |
| end                 | Var   | Sütunları sağa doğru yaslıyarak sıralar|
| top                 | Var   | Sütunları üste yaslar |
| middle              | Var   | Sütünları dikeyde rtalar|
| bottom              | Var   | Sütunları alta yaslar|
| stretch             | Var   ||
| baseline            | Var   ||
| direct-x            | Var   | Sütünları yatay sıralar |
| direct-xr           | Var   | Sütünları yatayda ters sıralanır  |
| direct-y            | Var   | Sütünları dikey sıralar|
| direct-yr           | Var   | Sütunları dikey ter sıralanır |








