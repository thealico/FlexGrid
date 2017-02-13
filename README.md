# Flexbox Grid
Bu grid modeli 12 sütun üzerine [flexbox](http://www.w3schools.com/css/css3_flexbox.asp) tekniği ile inşa edilmiştir. Css üreticisi olarak Sass, görev yöneticisi olarakta Gulp tercih edilmiştir. Media değer aralığı seçenekleri aşağıda görülen tablodaki gibidir.

Bu listede genel kullanıma göre **ms** adlı beşinci bir ufak aralık görmektesiniz. Bu aralık mobilin yatay ve dikey kullanımına göre farklı özelleştirebilme ihtiyacından doğmuştur. Bunu tercih etmeseniz [grid.scss](https://github.com/thealico/flexboxgrid/blob/master/src/style/grid.scss) dosyasından ms etiketiyle dönen değerleri disable etmeniz yeterli olacaktır.


| Media Değerleri  | MS <br> ( 376 > )  | XS <br> ( 568 > ) | SM <br> ( 768 > )  |   MD <br> ( 1024 > )  |  LG <br> ( 1280 > )  |
| --- | --- | --- | --- | --- | --- | --- |
| Class Prefix         |   ms   | xs   |  sm  |  md  |  lg  |
| Sass Media Değişken  |   $gl-ms  |  $gl-xs  |  $gl-sm  |  $gl-md  | $gl-lg  |


Col'un Aldığı Değerler

| Değer               | Media Destek | Açıklama |
| ------------------- | ----- | ------------------------ |
| col-top             | var   | Sütunu üste konumlar |
| col-middle          | var   | Bulunduğu kasanın yüksekliğinde ortaya konumlar |
| col-bottom          | var   | Sütunu alta konumlanır |
| col-first           | var   | Sütunu sol başa konumlar |
| col-last            | var   | Sütunu sağ sona konumlar |
| col-ns              | yok   | Sütunun padding boşluklarını sıfırlar |



| Değer               | Media Destek | Açıklama |
| ------------------- | ----- | ------------------------ |
| center              | var   | |
| start               | var   ||
| between             | var   ||
| around              | var   ||
| end                 | var   ||
| top                 | var   ||
| middle              | var   ||
| bottom              | var   ||
| stretch             | var   ||
| baseline            | var   ||
| direct-x            | var   ||
| direct-xr           | var   ||
| direct-y            | var   ||
| direct-yr           | var   ||
|cp                   | var   ||








