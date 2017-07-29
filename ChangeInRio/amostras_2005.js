var l5 = ee.ImageCollection("LANDSAT/LT5_SR"),
    urbano = /* color: #ff2121 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-43.47633361816406, -22.88155251696413]),
            {
              "landcover": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.44440460205078, -22.870481323871186]),
            {
              "landcover": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.36235046386719, -22.871113987790327]),
            {
              "landcover": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.36372375488281, -22.85719470096962]),
            {
              "landcover": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.303985595703125, -22.88661333314638]),
            {
              "landcover": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.27445983886719, -22.906538462308486]),
            {
              "landcover": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.2366943359375, -22.921085120294777]),
            {
              "landcover": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.363037109375, -22.947644552939387]),
            {
              "landcover": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.306217193603516, -23.011334318375788]),
            {
              "landcover": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.456077575683594, -23.01465231660935]),
            {
              "landcover": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.471012115478516, -23.018918194410187]),
            {
              "landcover": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.4809684753418, -23.02207801689697]),
            {
              "landcover": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.25094223022461, -22.989844354609343]),
            {
              "landcover": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.22141647338867, -22.983207056815168]),
            {
              "landcover": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.18553924560547, -22.96850902267391]),
            {
              "landcover": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.19068908691406, -22.953335182044672]),
            {
              "landcover": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.18553924560547, -22.946538013932596]),
            {
              "landcover": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.25815200805664, -22.947170323044375]),
            {
              "landcover": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.28518867492676, -22.97530508661324]),
            {
              "landcover": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.26416015625, -22.923061447914122]),
            {
              "landcover": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.56903076171875, -22.893334437906812]),
            {
              "landcover": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.579673767089844, -22.894125134228062]),
            {
              "landcover": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.60018730163574, -22.906775648598046]),
            {
              "landcover": 0,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.612117767333984, -22.908119696401826]),
            {
              "landcover": 0,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.65297317504883, -22.91373292849476]),
            {
              "landcover": 0,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.6871337890625, -22.93697397838359]),
            {
              "landcover": 0,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.654518127441406, -22.934207395829283]),
            {
              "landcover": 0,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.69983673095703, -22.976095304428473]),
            {
              "landcover": 0,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.662071228027344, -22.986841807912057]),
            {
              "landcover": 0,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.66833686828613, -22.973645614161118]),
            {
              "landcover": 0,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.60525131225586, -22.957365899510595]),
            {
              "landcover": 0,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.492984771728516, -22.85292372486714]),
            {
              "landcover": 0,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.46457481384277, -22.84786165351187]),
            {
              "landcover": 0,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.43290328979492, -22.81226364538693]),
            {
              "landcover": 0,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.4260368347168, -22.816377668714054]),
            {
              "landcover": 0,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.42397689819336, -22.78710210774308]),
            {
              "landcover": 0,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.29239845275879, -22.777289432154763]),
            {
              "landcover": 0,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.30055236816406, -22.751171616096453]),
            {
              "landcover": 0,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.380889892578125, -22.77649805659534]),
            {
              "landcover": 0,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.19652557373047, -22.79849658700764]),
            {
              "landcover": 0,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.18279266357422, -22.79501504159442]),
            {
              "landcover": 0,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.184852600097656, -22.801740674291796]),
            {
              "landcover": 0,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.211116790771484, -22.802769271210316]),
            {
              "landcover": 0,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11962127685547, -22.888511090568574]),
            {
              "landcover": 0,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.087005615234375, -22.879180194431903]),
            {
              "landcover": 0,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.093528747558594, -22.868425145783355]),
            {
              "landcover": 0,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.095245361328125, -22.859409228338897]),
            {
              "landcover": 0,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.032073974609375, -22.827769700083735]),
            {
              "landcover": 0,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.027095794677734, -22.814162440824855]),
            {
              "landcover": 0,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.00031661987305, -22.810997767057064]),
            {
              "landcover": 0,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.40646743774414, -23.007226207497368]),
            {
              "landcover": 0,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.40269088745117, -23.001695860726013]),
            {
              "landcover": 0,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.40200424194336, -23.0042240473713]),
            {
              "landcover": 0,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.41230392456055, -23.002248905601498]),
            {
              "landcover": 0,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.406639099121094, -22.99758745642394]),
            {
              "landcover": 0,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.378915786743164, -22.99624429712681]),
            {
              "landcover": 0,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.36621284484863, -23.002169899329452]),
            {
              "landcover": 0,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.36604118347168, -22.998772585882303]),
            {
              "landcover": 0,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.36295127868652, -22.981113079718142]),
            {
              "landcover": 0,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.35977554321289, -22.98877766803277]),
            {
              "landcover": 0,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.346171379089355, -22.996757859612476]),
            {
              "landcover": 0,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.334712982177734, -22.998338039622322]),
            {
              "landcover": 0,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.326730728149414, -22.99889109825588]),
            {
              "landcover": 0,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.316946029663086, -23.00359200514998]),
            {
              "landcover": 0,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.29943656921387, -23.007226207497368]),
            {
              "landcover": 0,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.352394104003906, -22.829826493040684]),
            {
              "landcover": 0,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.34535598754883, -22.83963538565354]),
            {
              "landcover": 0,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.27531814575195, -22.837262331316264]),
            {
              "landcover": 0,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.338918685913086, -22.84343218649012]),
            {
              "landcover": 0,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.318748474121094, -22.82697861759374]),
            {
              "landcover": 0,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.55104923248291, -22.978742500440568]),
            {
              "landcover": 0,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.544654846191406, -22.98146866302236]),
            {
              "landcover": 0,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.550190925598145, -22.98194277263883]),
            {
              "landcover": 0,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.567142486572266, -22.988343089604683]),
            {
              "landcover": 0,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.61653804779053, -22.99608627750742]),
            {
              "landcover": 0,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.61743927001953, -22.996362811719983]),
            {
              "landcover": 0,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.61593723297119, -22.997626960906835]),
            {
              "landcover": 0,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.615379333496094, -22.999088618647303]),
            {
              "landcover": 0,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.613619804382324, -22.996264049566225]),
            {
              "landcover": 0,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.610572814941406, -22.995019640238755]),
            {
              "landcover": 0,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.60804080963135, -22.994782608590242]),
            {
              "landcover": 0,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.60924243927002, -22.993893736202082]),
            {
              "landcover": 0,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.36822986602783, -22.80324400563127]),
            {
              "landcover": 0,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.36719989776611, -22.806250618559172]),
            {
              "landcover": 0,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.37127685546875, -22.80842641548604]),
            {
              "landcover": 0,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.35179328918457, -22.802294535135648]),
            {
              "landcover": 0,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.35256576538086, -22.79798227339632]),
            {
              "landcover": 0,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.35187911987305, -22.798892211542015]),
            {
              "landcover": 0,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.38200569152832, -22.80585501538506]),
            {
              "landcover": 0,
              "system:index": "88"
            })]),
    agua = /* color: #0a9999 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-43.18656921386719, -22.74958855761403]),
            {
              "landcover": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.06709289550781, -22.741356357867264]),
            {
              "landcover": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.15635681152344, -22.859092869495306]),
            {
              "landcover": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.147430419921875, -22.922349973292057]),
            {
              "landcover": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.19549560546875, -22.873011961866705]),
            {
              "landcover": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.14605712890625, -22.96850902267391]),
            {
              "landcover": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.17352294921875, -22.99442706033719]),
            {
              "landcover": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.23944091796875, -23.010860311966066]),
            {
              "landcover": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.41453552246094, -23.02918734674458]),
            {
              "landcover": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.36921691894531, -23.027923493284288]),
            {
              "landcover": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.45710754394531, -23.058252704597923]),
            {
              "landcover": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.597869873046875, -23.068360923710934]),
            {
              "landcover": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.67134094238281, -23.074046463246756]),
            {
              "landcover": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.62945556640625, -23.020340123692105]),
            {
              "landcover": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.683013916015625, -23.023499912858554]),
            {
              "landcover": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.78669738769531, -23.025395750814486]),
            {
              "landcover": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.26416015625, -23.03550643627977]),
            {
              "landcover": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.375396728515625, -23.049407390110566]),
            {
              "landcover": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11309814453125, -22.972302216775894]),
            {
              "landcover": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.21094512939453, -22.972302216775894]),
            {
              "landcover": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.40045928955078, -22.98494542823798]),
            {
              "landcover": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.076019287109375, -22.97546313054595]),
            {
              "landcover": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04065704345703, -22.95902557179228]),
            {
              "landcover": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.028297424316406, -22.9931628811881]),
            {
              "landcover": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.13507080078125, -22.79264120965405]),
            {
              "landcover": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09112548828125, -22.702088278948242]),
            {
              "landcover": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.059539794921875, -22.703988606693752]),
            {
              "landcover": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0499267578125, -22.73945654904862]),
            {
              "landcover": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.21197509765625, -22.76478516177405]),
            {
              "landcover": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.25592041015625, -22.777447706715883]),
            {
              "landcover": 1,
              "system:index": "29"
            })]),
    verde = /* color: #348633 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-43.48731994628906, -22.797072329176515]),
            {
              "landcover": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.512725830078125, -22.806250618559172]),
            {
              "landcover": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.54087829589844, -22.816377668714054]),
            {
              "landcover": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.48182678222656, -22.815111828617738]),
            {
              "landcover": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.448524475097656, -22.938791987568223]),
            {
              "landcover": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.45848083496094, -22.925512054125306]),
            {
              "landcover": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.48182678222656, -22.933100746980394]),
            {
              "landcover": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.50208282470703, -22.953335182044672]),
            {
              "landcover": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.51753234863281, -22.97293440544401]),
            {
              "landcover": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.52165222167969, -22.99000238153376]),
            {
              "landcover": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.52027893066406, -22.99632330686715]),
            {
              "landcover": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.53126525878906, -23.022236006077623]),
            {
              "landcover": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.5333251953125, -23.031083104715336]),
            {
              "landcover": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.53950500488281, -23.03550643627977]),
            {
              "landcover": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.29437255859375, -22.960290070337315]),
            {
              "landcover": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.297119140625, -22.940056675211103]),
            {
              "landcover": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.30638885498047, -22.92962264886694]),
            {
              "landcover": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.273773193359375, -22.9767274753537]),
            {
              "landcover": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.236351013183594, -22.946379936193033]),
            {
              "landcover": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.25111389160156, -22.96914122908264]),
            {
              "landcover": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.279781341552734, -22.85498013751911]),
            {
              "landcover": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.275146484375, -22.769533753785524]),
            {
              "landcover": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.28218460083008, -22.780296617421765]),
            {
              "landcover": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.21901321411133, -22.807200061490942]),
            {
              "landcover": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.44474792480469, -22.91871348910108]),
            {
              "landcover": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.45367431640625, -22.903850322031207]),
            {
              "landcover": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.46723556518555, -22.904482830419926]),
            {
              "landcover": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.58619689941406, -22.838369761824836]),
            {
              "landcover": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.516845703125, -22.820491567770727]),
            {
              "landcover": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.45985412597656, -22.79454027851281]),
            {
              "landcover": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.44268798828125, -22.84469776321743]),
            {
              "landcover": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.45908164978027, -22.822548470692173]),
            {
              "landcover": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.460025787353516, -22.8361548917935]),
            {
              "landcover": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.42397689819336, -22.82824434737089]),
            {
              "landcover": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.164896965026855, -22.781167106049978]),
            {
              "landcover": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.16596984863281, -22.786310789104277]),
            {
              "landcover": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.174896240234375, -22.785282068010172]),
            {
              "landcover": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.18343639373779, -22.784292905795215]),
            {
              "landcover": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.17755699157715, -22.786508619194397]),
            {
              "landcover": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.17472457885742, -22.77823907676769]),
            {
              "landcover": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.26913833618164, -22.76233165785695]),
            {
              "landcover": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.2667350769043, -22.75560408226342]),
            {
              "landcover": 2,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.26982498168945, -22.746818161136797]),
            {
              "landcover": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.2421875, -22.741514674076996]),
            {
              "landcover": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.24424743652344, -22.733994451632572]),
            {
              "landcover": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.252830505371094, -22.73209454051504]),
            {
              "landcover": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.22725296020508, -22.730590425493833]),
            {
              "landcover": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.226566314697266, -22.723623782305122]),
            {
              "landcover": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.01216125488281, -22.73375696418644]),
            {
              "landcover": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.018341064453125, -22.713489849836442]),
            {
              "landcover": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.033447265625, -22.686884707870213]),
            {
              "landcover": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.47358703613281, -22.940847098988225]),
            {
              "landcover": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.449554443359375, -22.967086547444453]),
            {
              "landcover": 2,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.2861328125, -22.947644552939387]),
            {
              "landcover": 2,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.303470611572266, -22.96155455705942]),
            {
              "landcover": 2,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.21266174316406, -22.953809390333088]),
            {
              "landcover": 2,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.31016540527344, -22.946063780159964]),
            {
              "landcover": 2,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.301753997802734, -22.967086547444453]),
            {
              "landcover": 2,
              "system:index": "57"
            })]),
    pasto = /* color: #fffa71 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-43.43513488769531, -22.838369761824836]),
            {
              "landcover": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.45745086669922, -22.840742796844843]),
            {
              "landcover": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.45041275024414, -22.849759952355388]),
            {
              "landcover": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.44560623168945, -22.85213278864119]),
            {
              "landcover": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.437538146972656, -22.853398284393972]),
            {
              "landcover": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.448524475097656, -22.81606120979294]),
            {
              "landcover": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.43994140625, -22.819225765913323]),
            {
              "landcover": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.4868049621582, -22.777447706715883]),
            {
              "landcover": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.50362777709961, -22.78156278086308]),
            {
              "landcover": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.50465774536133, -22.774598736527658]),
            {
              "landcover": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.4922981262207, -22.779980074725355]),
            {
              "landcover": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.45109939575195, -22.782037589123988]),
            {
              "landcover": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.58121871948242, -22.81827640679854]),
            {
              "landcover": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.58121871948242, -22.810048350590094]),
            {
              "landcover": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.57555389404297, -22.807358301336368]),
            {
              "landcover": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.632545471191406, -22.86478721600312]),
            {
              "landcover": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.63597869873047, -22.86889965118146]),
            {
              "landcover": 3,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.648338317871094, -22.860991011510585]),
            {
              "landcover": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.65374565124512, -22.857827426757016]),
            {
              "landcover": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.65846633911133, -22.853714656491544]),
            {
              "landcover": 3,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.67013931274414, -22.862572776271094]),
            {
              "landcover": 3,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.67966651916504, -22.85482195303491]),
            {
              "landcover": 3,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.603363037109375, -22.932863606764744]),
            {
              "landcover": 3,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.61366271972656, -22.927014016666305]),
            {
              "landcover": 3,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.60568046569824, -23.00849025493646]),
            {
              "landcover": 3,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.59297752380371, -23.012598327326018]),
            {
              "landcover": 3,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.59726905822754, -23.01496831218459]),
            {
              "landcover": 3,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.60602378845215, -23.013230327359754]),
            {
              "landcover": 3,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.58448028564453, -23.0027229422625]),
            {
              "landcover": 3,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.57272148132324, -23.003671010589525]),
            {
              "landcover": 3,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.57452392578125, -23.006199160233727]),
            {
              "landcover": 3,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.5567569732666, -23.002564930227148]),
            {
              "landcover": 3,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.556413650512695, -22.999562666407478]),
            {
              "landcover": 3,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.497962951660156, -23.00841125231845]),
            {
              "landcover": 3,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.50088119506836, -23.003671010589525]),
            {
              "landcover": 3,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.48920822143555, -23.00122182045764]),
            {
              "landcover": 3,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.475046157836914, -22.99442706033719]),
            {
              "landcover": 3,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.469295501708984, -22.99221473905883]),
            {
              "landcover": 3,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.28879356384277, -22.919820255490258]),
            {
              "landcover": 3,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.27746391296387, -22.918555378879017]),
            {
              "landcover": 3,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.30836296081543, -22.913653870501587]),
            {
              "landcover": 3,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.31411361694336, -22.910965871298632]),
            {
              "landcover": 3,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.27068328857422, -22.917053322568957]),
            {
              "landcover": 3,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.25737953186035, -22.80284839372866]),
            {
              "landcover": 3,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.251800537109375, -22.799960392049194]),
            {
              "landcover": 3,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.18476676940918, -22.809178046349615]),
            {
              "landcover": 3,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.176870346069336, -22.812659229952587]),
            {
              "landcover": 3,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.17858695983887, -22.800158202335588]),
            {
              "landcover": 3,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.17584037780762, -22.79936695946756]),
            {
              "landcover": 3,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.1912899017334, -22.800632945851667]),
            {
              "landcover": 3,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.20253372192383, -22.811551590273833]),
            {
              "landcover": 3,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.2231330871582, -22.79885264914024]),
            {
              "landcover": 3,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.24647903442383, -22.80783301976997]),
            {
              "landcover": 3,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.24347496032715, -22.80363961638545]),
            {
              "landcover": 3,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.23197364807129, -22.804905563081164]),
            {
              "landcover": 3,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.23077201843262, -22.802057166478196]),
            {
              "landcover": 3,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.229055404663086, -22.812580113131354]),
            {
              "landcover": 3,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.2216739654541, -22.81400420888266]),
            {
              "landcover": 3,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.60018730163574, -22.98526149336591]),
            {
              "landcover": 3,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.60156059265137, -22.986683777289468]),
            {
              "landcover": 3,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.60396385192871, -22.984787395396694]),
            {
              "landcover": 3,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.60353469848633, -22.982890986880328]),
            {
              "landcover": 3,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.60396385192871, -22.986525746481995]),
            {
              "landcover": 3,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.44822406768799, -22.817406155129255]),
            {
              "landcover": 3,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.452515602111816, -22.8185533038907]),
            {
              "landcover": 3,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.44809532165527, -22.821282687956252]),
            {
              "landcover": 3,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.467020988464355, -22.82318135764728]),
            {
              "landcover": 3,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.43466281890869, -22.821599134743426]),
            {
              "landcover": 3,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.43886852264404, -22.82199469219316]),
            {
              "landcover": 3,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.42865467071533, -22.822034247874935]),
            {
              "landcover": 3,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.43637943267822, -22.816140324592155]),
            {
              "landcover": 3,
              "system:index": "70"
            })]);