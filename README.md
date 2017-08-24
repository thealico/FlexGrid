Bu grid varsayılan olarak 12 sütun üzerine flexbox tekniği ile inşa edilmiştir. Css üreticisi olarak Sass, görev yöneticisi olarak Gulp tercih edilmiştir. Grid’in sütün sayısı (column), sütün aralıkları (gutter), ekran aralıkları (media), media  kural yönü tercihi (min / max) , özellik opsiyonları ve seçici kurallar [set.scss](https://github.com/thealico/FlexGrid/blob/master/src/style/_set.scss) üzerinden özelleştirebilirsiniz.

### Row
Satırın refrans aldığı değerler aşağıdaki gibidir, örnekler için linklere bakınız.

* [center](https://thealico.github.io/FlexGrid/example/#07)     - Sütunları yatayada ortalar
* [start](https://thealico.github.io/FlexGrid/example/#07)      - Sütünları sola yaslı sıralar
* [between](https://thealico.github.io/FlexGrid/example/#11)    - Sütünları sol ve sağa doğru sonlandırarak sıralar
* [around](https://thealico.github.io/FlexGrid/example/#12)     - Sütunları merkezden ortalayarak sağa ve sola doğru sıralar
* [end](https://thealico.github.io/FlexGrid/example/#07)        - Sütunları sağa doğru yaslıyarak sıralar
* [middle](https://thealico.github.io/FlexGrid/example/#08)     - Sütünları dikeyde ortalar
* [bottom](https://thealico.github.io/FlexGrid/example/#08)     - Sütunları alta yaslar
* top                
* stretch            
* baseline           
* [direct-x](https://thealico.github.io/FlexGrid/example/#09)    -  Sütunları yatay sıralar 
* [direct-xr](https://thealico.github.io/FlexGrid/example/#09)   -  Yatay sırayı ters çevirir
* [direct-y](https://thealico.github.io/FlexGrid/example/#09.1)  -  Sütunları dikey sıralar
* [direct-yr](https://thealico.github.io/FlexGrid/example/#09.2) -  Dikey sırayı ters çevirir
* [ns](https://thealico.github.io/FlexGrid/example/#05)          -  Gutter boşluklar kaldırır
* [c-nb](https://thealico.github.io/FlexGrid/example/#15)        -  (col no bottom) Alt gutter boşluğu iptal eder
* [c-ob](https://thealico.github.io/FlexGrid/example/#15.1)      -  (col no bottom) Alt gutter boşluğu aktif yapar
* c-nf - Child No Flex - Row özelliği verilmiş sütunun flex özelliğini kaldrır
* [c-eh](https://thealico.github.io/FlexGrid/example/#16)   - ( col equal height ) Sütunları yüksekliği eşler
* [c-eh-1](https://thealico.github.io/FlexGrid/example/#16) - ( col equal height ) Sütunları yüksekliği flex methodu ile eşler 

### Col
Bunlarda sütunun refrans aldığı değerlerdir. Bir col aynı zamanda row etiketi özelliği alabiliyor col ve row'un aynı etiketlerinin çakışmaması için this col kısaltması olarak  **tc-** eki kullanıldı.

* [tc-top](https://thealico.github.io/FlexGrid/example/#08.4) Üste yaslar
* [tc-middle](https://thealico.github.io/FlexGrid/example/#08.3) Dikeyde ortalar
* [tc-bottom ](https://thealico.github.io/FlexGrid/example/#08.1) Alta yaslar
* [tc-ns] - Gutter boşluğunu (padding) alır
* [tc-nb] - Alt gutter boşluğunu (padding) alır
* [tc-ob] - Alt gutter boşluğunu (padding) aktif eder
* [tc-first](https://thealico.github.io/FlexGrid/example/#10)  
* [tc-last](https://thealico.github.io/FlexGrid/example/#10) 
* [order-](https://thealico.github.io/FlexGrid/example/#10.1) Sütunun sırasını değişir
* [left-](https://thealico.github.io/FlexGrid/example/#14) left offset öteleme 
* [right-](https://thealico.github.io/FlexGrid/example/#14) Right offset