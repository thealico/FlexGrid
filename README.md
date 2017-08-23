# Flexbox Grid
Bu grid modeli 12 sütun üzerine [flexbox](http://www.w3schools.com/css/css3_flexbox.asp) tekniği ile inşa edilmiştir. Css üreticisi olarak Sass, görev yöneticisi olarakta Gulp tercih edilmiştir. Media değer aralıkları aşağıdaki tabloda görüldüğü gibidir.

[Demo Sayfası](http://alico.me/labs/grid/example/)

| Media Değerleri      | MS <br> ( 376 > )  | XS <br> ( 568 > ) | SM <br> ( 768 > )  |   MD <br> ( 1024 > )  |  LG <br> ( 1280 > )  |
| ---                  | ---                | ---               | ---                |  ---                  | ---                  |
| Class Prefix         | -ms                | -xs               |  -sm               |  -md                  | -lg                 |
| Sass Media Değişken  |  $fg-ms            |  $fg-xs           |  $fg-sm            |  $fg-md               | $fg-lg               |

Bu listede genel kullanıma göre **ms** adlı beşinci bir ufak aralık görmektesiniz. Bu aralık mobilin yatay ve dikey kullanımına göre farklı özelleştirebilme ihtiyacından doğmuştur. Bunu tercih etmeseniz [grid.scss](https://github.com/thealico/flexboxgrid/blob/master/src/style/grid.scss) dosyasından ms etiketiyle dönen değerleri yorumlamak yeterli olacaktır.

----------

Satırlar ve sütunların class etiketleri  Bootstrap aşina olduğumuz şekide  **row** ve **col** olarak atandı. Col (col-1 > col 12) ve row (row-1 > row-12) kullanılıyor. Media aralığına göre formatlamak içinde yine media prefix (col-xs- ) ekleriyle birlikte yazıyoruz.


| Etiket    | Açıklama                                                       |
| ---       | ---                                                            |
| row       | Satır etiket ismi                                              |
| row-      | 1 den 12 ye kadar sütunlarının kaçarlı olacağı değeri alır     | 
| row-      | -ms -xs -sm -md -lg media eklerini alır    (row-xs-3)          |
| col       | Sütun etiketi ismi (tek başına kullanılır)                     |
| col-      | 1 den 12 ye kadar kaçarlı sütun değeri alır                    |
| col-      | -ms -xs -sm -md -lg media eklerini alır (col-xs-6)             |

Flexbox Grid lerde  önceki nesil metodlara göre ayrışan en belirgin özellik col sütun sayısı değerini belirtmeye gereken kalmadan otomatik verebiliriz. Yada satırın (row) kendisine içinde sütünların (col) kaçarlı sütun olacağını söylebiliriz. Mesala aşağıdaki örnekte üç sütun var bu otomatik olarak üçe bölüneceği anlamına gelir. Eğer dört tane koyar isek dörde bölünecektir.

```
<div class="row">
  <div class="col">%33.33</div>
  <div class="col">%33.33</div>
  <div class="col">%33.33</div>
</div>
```

Buraya bakalım şimdi **row-2** verilmiş buna göre aşağıdaki kutular iki sütun genişliğinde dizilecektir. 

```
<div class="row-2">
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
</div>
```
Olayı biraz daha detay katalım. Sütuna (row) bir şart atamayalım, ancak içerdeki sütunlardan sadece birine sütun sayısı verelim. Buna göre aşağıdaki örneğin çıktısında son sütun 6 genişliğinde olacaktır. Diğer sütunlar ise kalan alanı eşit şekilde paylaşacaktır.

```
<div class="row">
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col-6"></div>
</div>
```

----------

### Satır (Row) Referansları
Satırın (row) aldığı referansları aşağıdaki tabloda görüldüğü gibidir. Media (-ms,-xs,-sm,-md,-lg) desteği kapsayanlar var olarak işaretlenmiştir. Referans linklerine tıklayarak çalışan örnekleri bakabilirsiniz.

| Değer               | Media Destek | Açıklama |
| ------------------- | ----- | ------------------------ |
| [center](http://alico.me/labs/grid/example/#07)              | Var   | Sütunları yatayada ortalar|
| [start](http://alico.me/labs/grid/example/#07)               | Var   | Sütünları sola yaslı sıralar |
| [between](http://alico.me/labs/grid/example/#11)              | Var   | Sütünları sol ve sağa doğru sonlandırarak sıralar |
| [around](http://alico.me/labs/grid/example/#12)              | Var   | Sütunları merkeden ortalayarak sağa ve sola doğru sıralar |
| [end](http://alico.me/labs/grid/example/#07)                 | Var   | Sütunları sağa doğru yaslıyarak sıralar|
| top                 | Var   | Sütunları üste yaslar |
| [middle](http://alico.me/labs/grid/example/#08)              | Var   | Sütünları dikeyde rtalar|
| [bottom](http://alico.me/labs/grid/example/#08)              | Var   | Sütunları alta yaslar|
| stretch             | Var   ||
| baseline            | Var   ||
| [direct-x](http://alico.me/labs/grid/example/#09)             | Var   | Varsayılan sıralama düzeni yatay sıralama |
| [direct-xr](http://alico.me/labs/grid/example/#09)            | Var   | Yatayda sırayı ters çevirir |
| [direct-y](http://alico.me/labs/grid/example/#09.1)           | Var   | Sütünları dikey sıralar|
| [direct-yr](http://alico.me/labs/grid/example/#09.2)          | Var   | Dikeydeki sıralamayı ters çevirir |
| [ns](http://alico.me/labs/grid/example/#05)                   | -     | Gutter boşlukları sıfırlar |
| [c-nb](http://alico.me/labs/grid/example/#15)| Var     | Child No Bottom - Sütun alt bottom boşluğu pasifleştirir |
| [c-ob](http://alico.me/labs/grid/example/#15.1)| Var     | Child On Bottom - Sütun alt bottom boşluğu etkinleştir |
| c-nf| Yok     | Child No Flex - Row özelliği verilmiş sütunun flex özelliğini kaldrır |
| [c-eh](http://alico.me/labs/grid/example/#16)| Yok     | Child Equal Height - Sütunlara yükseklik eşleme desteği atar |


## Sütun (Col) Referansları

Sütunun (col) aldığı referanslar aşağıdaki tabloda görüldüğü gibidir. Media (-ms,-xs,-sm,-md,-lg) desteği kapsayanlar var olarak işaretlenmiştir. Referans linklerine tıklayarak çalışan örnekleri bakabilirsiniz.

| Değer               | Media | Açıklama |
| ------------------- | ----- | ------------------------ |
| [col-top](http://192.168.1.60/htm/labs/flexboxgrid/example/#08.4)          | Var   | Sütunu üste yaslar |
| [col-middle](http://192.168.1.60/htm/labs/flexboxgrid/example/#08.3)          | Var   | Sütunu dikeyde ortaya yaslar |
| [col-bottom ](http://192.168.1.60/htm/labs/flexboxgrid/example/#08.1)         | Var   | Sütunu alta yaslar |
| [col-ns]()             | Yok   | Sütunun padding boşluklarını sıfırlar |
| [col-first](http://192.168.1.60/htm/labs/flexboxgrid/example/#10)           | Var   | Sütunu ilk sıraya alır |
| [col-last](http://192.168.1.60/htm/labs/flexboxgrid/example/#10)            | Var   | Sütunu son sıraya alır |
| [order-](http://192.168.1.60/htm/labs/flexboxgrid/example/#10.1)        | Var   | Sütunu istedğimiz sıraya almayı sağlar 1 den 10 kadar desteği vardır |
| [order-xs-](http://192.168.1.60/htm/labs/flexboxgrid/example/#10.2)        | Var   | Sütunu istedğimiz sıraya almayı sağlar 1 den 10 kadar desteği vardır |
| [left-](http://192.168.1.60/htm/labs/flexboxgrid/example/#14)        | Var   | BootStrap dan bildiğiniz Offset ile öteleme desteği vardır left- 1 den 12 ye kadar destekler yine media (left-xs-) desteğide yer alır|
| [right-](http://192.168.1.60/htm/labs/flexboxgrid/example/#14)        | Var   | Aynı şekilde offset right da yer alıyor |











