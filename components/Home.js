import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, 
  Image,
  StatusBar,
  ImageBackground,
  TouchableNativeFeedback,
  ScrollView,
  Dimensions
} from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
export default class Home extends Component{
  static navigationOptions = {
    header: null,
    };
  _renderItem ({item, index}) {
    return (
      <TouchableNativeFeedback onPress={() =>
        this.props.navigation.navigate('Details', 
        )}>
        <View style={{flexDirection: 'column', height: 250, width: 200}}>
            <Image
                source={require('../kingOfBoys.jpg')}
           //     containerStyle={styles.imageContainer}
                style={{width: 200, height: 200, borderRadius: 4}}
                
                resizeMode={'cover'}
            />
            <Text style={{fontSize: 14, fontFamily: 'mont-bold', color: '#F2BB66', alignSelf: 'center'}} >
                { item.name }
            </Text>
            <View style={{width: 120, flexDirection: 'row', justifyContent: 'space-evenly', alignSelf: 'center'}}>
                        <View style={{width: 22, height: 20, }}>
                          <Image 
                          resizeMode="contain" style={{width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        </View>
        </View>
        </TouchableNativeFeedback>
    );
}
constructor(props) {
  super(props);
  this.state = {
  entries: [{
    id: 1,
    name: "KING OF BOYS",
    thumbnail: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUVGRoZGBgYFxsYHhsYGhseHR4eHxgdHyggGRomGx0YITEiJSkrLi4uGiAzODMsNygtLisBCgoKDg0OGxAQGy0lICYyNS04Li0tLS0rLS0vLS0vLS0tLTEtLy0tLS0rLS0vLS0tLS0tLS0tLTUtLS0tLS0tLf/AABEIARUAtgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAABAUGBwgDAgH/xABLEAACAQIDBAcDBwcLBAIDAAABAhEAAwQSIQUTMUEGByJRYXGBMpGhFCNCUnKxwQg1YoKSsvAVJDM0Q1Ois9HS4XOTwvFUYyWjw//EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAA3EQACAQIDBAYIBQUAAAAAAAAAAQIDEQQhMQUSQWETIjJRgfAGIzRxcrHB0RQzkaHCQ1JT0uH/2gAMAwEAAhEDEQA/ALxooooAopu6Q7LGJw92zOVnRlVxoUYjRgRqCDBqDZ7mN2CGQMmMtLl7IAcYiw8MI4dsqZHCG1oCyqKYdnbRt4rB4e6qjJfVGyhZyiMzCBOohl0501jalxbuybdrE721iN6tx1S2ouhLDurABex2gD2YGlATKimDoZtC7es3WuvnZcTibYMKOxbvMqjsgDRQBNP9AFFFFAFQbri6T3MDgCbBIvX3FpGHFZBLMPHKCAeRIqc1W/TbErirqLlBWwXIMzJMDUR4MRx086yrVVTjdm9CjKrKyKiwXV89wFrt1i51MCdTqZYntGaaNu9D7lgFlbOBxBEH/Q1cezMYklRlY6SVaY0mCIkGCKYOl962LbSygmQASBPvrzo4qrv5vwPX/B0HG1vG469QfTW5fD4C+xdrSZ7LnU7sEKUJ55SVI46EjgBVx1nrqA2WzbSvXh7Fm1DHva4RlHqFc/q1oWvVTujw5x3ZNBRRRUlQooooAooooAooooAoor4zACSYA4k0A17Mxz4myt+01sJcGa3KlpQ+yScw1IgxGkxrFR3oPszEW8Ti3u21t2b1wX1RTmC4hs9q9DaFh2A05RO8HogboTtDBFjsrHBbJYsMJiFzW1zEkqrgFkWToAB4kyTRsPpdicVcwdu6hw94Ym/hsVbWCrG3hmudkmYUnKQQZ04kQSA99CtiXcIMTaYDcpfufJQNIs3ct0jyDsV/VNNfR/YF9Bs1GUA7Na4l0nMouF8OVBtEqN4suNdPZYcRXb+V764d7m9JZNojDrMf0Jxa2ipH0jkYjMddAZnUo7+Je7j7Su7FbW03tprGVP5PLxI49pmMnXWKAfugalUxVpvat4y/mjUTdbfATzhLqT4zUnqvruMezh9tYi08NavtcTgRmXC4cyfrA6CO7x1qwaAKKKR7R2tYsDNfv2rQ77jqn7xFALKr/b2C3N/XUOS4A5Ak6eGs12271p4C1bY2Lq4i4OCpOXzNyMseUnwqObNuXbipcvsWu4hVvvJMA3VBCKp9lVUKoH6JJ1NcWNScOaO/ANqpyZ2xeJAkgqpAJ1bXhHHhw5TyqHYpWbCk5oPazkw2bXgQQeQMRHGpTtkWBZNq7YZsohSpOoPfmDCY56TTB0V2A2JvJhVYlFIa6fqpM5Z5kAhQeZ8jXHCGeTueu5KMW5aEz6lVKW71sW1VOw2YAyWMrBaTMKi6ACPMmrLpBsTY9rC2hasiFkkk8WY8ST3/AOlL69ammopM+erTjKbcVkFFFFXMgooooAooooAooooArli7OdHSYzKVnzEV1ooBs2Xh8RatJad0vMihd6ZtlgNAWQZgWjiQRJ5CjZOxbdkMTD3LlxrruVAJuNHAfRUKFUCSQFEkmSXOigGoYiyHuI27OVh2FtHMDkz6jXOYkyo4GONLjg7f92mpk9kcRwPnTbj+jVm8bpuSwukMVIQhWVAissrKsAJDTINPCLAA7u/X486A4/I7cEbtIb2hlEHzEa1W/XT05vbPt2bGEIS9dls+VWyW10gKwIkkxwOgPhVn1kfrL6QDG7Rv30JNvNktydMiAKCO4Egt+tQlCPaPTTaN4k3MbiDPIXGVf2FIUe6mPVm1MkniTzPea+MK+quhPdHxoBxtHLbfXQrA95/j1q/ts2FbcKQQt6xlBBywbYVgARqGIuEiPqGs4NcJ0mtB9YF90wy5QFGFNq4rmZL6Wig0gjK5kEzpNZVKTqR3FqzejWVOW9wREekQxlmF+U5knQsgzx5gwfOKYcPt3EYK2mMw7ZLm/uWwxAOdMiF1YH2lLAeREiCKdruPvYpltoim5c7KkmFGkknwAk+lI+s2ytizh8KPZtMchiCQbNpnZu9muMzepHKojhalF+sSvyNamMpV4eqbtzuTXo319W2hcbhyh0m5ZOZZ7zbbVR5M3lVobA6V4LGicNibdwxOUGHA8bbQw91Y3NfbblSGUkEEEEGCCOBB5GtjiNw0VVnUH0pvYvDXrOIuNcfDspV3JZilwGAWOrQVbU8iByq06AKKKKAKKKKAKKKKAKKKKAKKKKAKKKKAg/W/0mGC2e4Dlb2IBt2oHfGYzECFJ8dRFZdtWzqvPu/4qwevPpF8o2kbSmbeFXdAci51c+BmF/UqvBdg6zI4EaEVBZDjcwwKOANdGH8etNdvg3l+Ip62e8l/sj4/+qanTK5HgfuNQi0lxDBWC9xEBguyqD3EkCrl6zsLdK4RWuMbQzApwGdVAU+PZLa92vOql6OD+d4ef761++KvzrUw4GBDnjZu2o8tEPwdq3w7SqxbMaybpySGrqx2SDbe9Gpfdp9hSmY+rEg/YFRTrxwxV8KZ4rcX1UW/9w91Wn1f2AuBw3iHY+t6RVb9e69nBnxvfFbJpiJb1Rt94oRtSSXcVODpXogCB768rQNTWJct38nHHhcZiLBGt20GBnhu2giPHPM/o+NaDrJXVdtn5JtTDXWJCM+7eOGW4MuvgGKt+rWtakMKKKKEBRRRQBRRRQBRRRQBRRRQBUf6fbZ+SYDEXluC3cCMLRMH51hCAA+0Z1iDw7pqQVnv8oTpEHxlrCLquHXM/aI+cuAHUDuQLH2zUMlFT4247Oz3CS7ksxJklmMknxJrjXZ3U8JU93Ee/jSzo5so4rE2rC8brqg5+0YnyAlj4ChNsxfsvDMqOXUgkJE9xXOD6qyn1pvxtqHkd4+H8Grq61tjJauAW1AXdW9PBAbY9yqB6VTW0V7ZFV4mtuqKehlnPj8KvfeQHynX4TV59ayj+TrjSdWtgCdIa7mmOEwo1qoOrG3m2lZMeyS/lAn8Y9atPrivxg7VsHjfUHxCWj8JIragr1F7zGq7QZJehP5vwv8A00Pvaq2690+ZwZ7i/wAUt/6GrF6CGdm4Q99q3++ahHXhanB4c91xR77b/wC2oqdpiCysUiB6U5bXxdu4UFq3lVVVJPEwNdAYide/xpHupJA5R/zXrGWMjZCCCujAiDP8aelZls0jwq8q190G218swGHxEyz2xn/6i9l/8QNZJC6aMCPuq7fyd9tymIwTFZUi8mupDQriO4EKdPrnwotSWsi5qKKKsZhRRRQBRRRQBRRRQBRRRQHi9dCqWYwqgkk8gNSfdWNOlO2DjMXfxLT87cZgDxCzCj0UKPStJddm2/k2yroBh8QRZXyfV/8A9YYeorLFCT7NW5+Tv0eN3FXMYw7GHXKnjduCCZ8EzftiqirX3VzsEYLZ2Hs5crlA93vN1wC098Hs+SigIB1nbVU7SbDnlh7cec3GI/ZIqmtpKRdceMT5aVLes3aUbdvvPZR7SnyVEB+M1FNrCLreH4VnxNk+qTXqSwObE3rh+iiIPO4/H3JUl67cV/Vbc6fO3D6lQp92akvUfZIs3rkDtXT3gHd25HjGY019bl9mxoRom1YtqwB0zEFyB4doV14VXqI5cS/Vss3q9P8A+Lwf/ST9+o11x4cNgAT9C7bb4XV/GpH1eNOy8GZ13Y/zaa+ta3OzMT4BCP8AukH4E1jPVm0dCr+p3o6uN2gguAG3bBuuDzCkQvkXKyOYmnTrz2Ludp70Ds4lFuDu3i9h1HiQEbzbxp1/JuAOIxR5i0gjwLGfuFT/AK4+iRx+Bm2Jv4cm5b72EdtJ8QAR3lVqgbzM0u65uzmB7hoPjTv0O26uDx9jEFjFtxnhfoHsuBHE5S3rFMj311zocw0PLh+Nc7dvNwgd0n7qWJubXs3QyhlIKsAQRwIOoI8Ir3UR6pcS1zZGELGSqFPS27IB7lFS6rGbCiiigCiiigCiiigCiimzpHtyzgsPcxN8kW7YkxqWJ0CqObEwP9BQFJ/lHbZD4ixhAf6JDcb7VwwAfJVn9eqbp56T7ZfGYm9inbtXGJj6qcFUcoVQB6UzsahEsnvU30SONx6O4G5w8XXn6RB7CxzBYa8oVhWk+km1Pk2Gu34koNB+kxCrPhmIqI9SfRo4TZ63HEXsVF154hIi2vkF7Uci5qS9NSowGJLcN23v5fGKPQlaoyj0tvm5iGuM2Zngux5vlAb/ABTXPF3C/aI4qDPPXWuW2LhZyT3knzJk0+dDMML+KwtgjR3WSeBVTmYfsg1XgacWXb1d7I3GFRCIJWD9psub/FmHpVUdPMTvMfi3/wDsZR+oMn/jV9JaUBSRopDHlBAZyfe1U5bXZzPi2e9861vEFN4LYs7w6oyXd4c5kiBrMmQIMdFCrGk7swrUpVVZE/6sLk7Kwngtwfs3/wDiunWDbDYDEg8Cv/8AX/mkPVFenZNgd2+/zp/GnHp0s4LEAfUc+64DWU3dto1hwKr6lNo/J9o2FPDEC5ab3Ky/4wB61pese4LENau2ih7Vshwf0g5I/dX0rXeBxS3baXV9m4quvkwBHwNUixNGZOszZqWsfiLO7jK0o8/QcBhI5gAlZ71qCXkymJmtTdZ/QW1tCwzoijFIvzdzgSoMlCeBB1ieBPLWsxX3UdlADzLHX+BU6Bu6uX3+TrtJnwd+yxkWroZfAXF4ftKx9TVs1mvqJ2oU2ottXKJeRw6SSrsqll/WEEg90jnWlKlFJahRRRUkBRRRQBRXHGs4tsbahnAOVSYBbkCeQqteluI2ottrl8IlrMAVR50YwFgRI5SazqVNxaXOrDYV15bqaXDN5+CJtiuleDtkq19ZHIS33A1WHWzcvbUW1awwy2bbF2zyM7RAMCYCjNx+sabNn3bt+6tiwiC5dJgnWcqljLMdNAakOx+rzHtfz4nEZLa65AFcMZ1XslSBHPWuZVas+yejWwFHDfmvPuur++xR+3ejd/Cn51RH1lMj15inPqz6LHaGPt2SPmk+cvH/AOtSJHmxhfWeVW5tboFjXd1W3ae1JAJaCV8QSY8taj/Qrbi7Kt3Raw6uztmd2Y5oXgogeyNfUmtI1nFWqKxktmSrZ4dprjmsi+wI0FQzrfx262ZdP1yiDxlpj4U5YPG7SLqLmFsKhIzML0kLzIEamoB+Udj8uHw1kH27jOR4KIHxatr3R58qbhJJtP3NP5FGXBOadSedTLqwYLjbErp21B5BmtsBPnqPWofs2zcuXFtW1Lu5hVHM/gPHlV6dFOjK4ZFBhmTUtHFzxYeAAIH6JHjSxKaJD002jucDi31BFi7DRpLndpr3zFZfXQcjxq/uujGbvZbIeN25atfsjeT71qjcFgwVzNPl3/8Aqroxky7epG9m2aR9S5dX37tvxqUdKIOGvzwyXJ97VBOpTFQmLsRCo6P6OpzfC2PfU36W2C+CxKAwWtuB5kuY9QIqJF48DOmH1u69y/cD981qbq32hvtm4Zuaruz52yU+5QfWsp54uz3x9wq/+pXHucHi7aANctXC9tSYB3iDKCeQLq2viaotSzV0Wg6yCO8VjXpNse9g8Rcw94ZbiEZgOGuoIPNY4VpfbHSTaGGtG9dwlkIpUEi8SZZgo0jvIqvdrodsY6zc+TpvUQqFzdlwpLdokctdPGqyrRTtxOyns2tODmrbq1e8rL9ytNgbPxtu5bxNi0822W4p0WYMjQkHKfuNas2L0hsYhEKuqu6hjaZgHUkagjmQdJGlQ3YvQvEs5OIW3bAgrlOaTOoMERpSbF9F9oh7gCWHtZmyyYlJ0kToYqnSVdd0fhaDe7v5+9W8+JaINFZ/wnSBlAdEVNJlCyH/AAtVmbBO1lZd6lt7TRM3ZKqSJYcSSFnSamnX3noWxOyqlBXlJeLSv7syaUUUV0HlhUR60/6g327f7wqXVEetP+oN9u3+8Kzq9hnZs72qn8S+ZXPQD854Xzu/5Nyr0qi+r/8AOeF87v8Ak3KvSssL2PE9H0g9pXwr5sKzVjfZfyb8a0rWasb7L+TfjVMXwOn0d/q+H1L+2hsq9cfMmMu2lgdhFtkecspNUH0p2hdxSi5f/nD2xCBl7zwAUCZNaSFZrbaBw4F9VVjaIYK0wYPAxrFWr5SjbiY7JtOjWcknurLJZZS5ch5wfRhsDhximC2sSYQKgkIG1bUzrGUE95I85J0fwWMvIHuYhrakdhQiTByqDqIUEEaRMd1I8H0nwu1bK2c4s3Sylrdw6tB1VG0DFiW1GoHEVN17J8vCOBn0kJ91adH1uRyPGJUFFKO827vdWmVrZWK06cK7XdxeuG+iEOucKNWHHsgcjVa2drWwdcPbjnEgjvOvCrJ6Y3Q2MugfQyJ6rbWapl+J86zpLenJP5s69oS6LD0JwjG7V31Y55LkXL1Z7pb7G0Aq3bROnMhliZ5gFvjUq6Q7fhhh7Ki5daJ7lILNHiQNT3a+VU70R2zcs3rapxBdp5ANbZfXtFWHiKsjoFhs965cOpRRE82dp495ylZ/T8aPei+jvr8iyhRrQljHFWil1Vkt77Xa95We3s+FxL4cWrS7shc2TMSORzNrBWDUx6AbYxVp77YYW8wsi7cXIO2iGDwiSucmBBifIres/ZVu7cQ2iGxCWyz2xq24Qe2w5QMvHUhjE5TCTqmxGTaNieDq9s+qkj4hau4I85Yqd7ys13NK36cPAlF/bF7E7IxT3nzkYi0BoBC5rZgQBpJNIOrT84Wvs3P3DT1tvo++C2Zi7bFcrYlGt5STFveWwoMgQwA8aZerT84Wvs3P3DXO01Ujfzme/TlTlg8Q6fZztb4UXVXi77J8jXuvF32T5Gu8+PRmix/RD7P4VpXCewn2R91Zqsf0Q+z+FaVwnsJ9kfdXHhdZH1HpF2KXj/E60UUV2Hy4VEetP+oN9u3+8Kl1RHrT/qDfbt/vCs6vYZ2bO9qp/EvmVh0TuXFxthrKB7oL5FJgH5tpkyIhZPpVn/yltf8A+HZ/7g/31XPQD854Xzu/5Nyr0rDDxvHVnsbbrKGIScIvJa3733NER/lLa/8A8Oz/ANwf76pjGey/k1aVrNWN9l/JvxqmJja2Z0bBqqfSWilppfn3tmlFrL+2v6vc+zWktu43cYW/eP8AZWrj/sIT+FZt2sIw7/ZrSv2o+e449jfkYj3fSRDHQ5dSOPjTzsnpxj8NAt4hmQfQufOLERHakqIEdkime9w0+NJV8NTXXY8C5PcBtF8Rbe/cjPde47RwksTAnkOA8BUf6w9mrhto4m0qhVDhlA4BXUOAPRqedhWyuFWQRIYiREqSYPkac+v/AGdkx9q6Bpew6En9JCVP+HJXLR/Ml57z3dqeyYf4fpEjPRRRnJ55T94p82nt/EYdDbsPu977TAdrSQAG+jxOo18ai/R7EBLik6Akg+sfjFO/ShNEPmPfr+FTJevRNGalsmcY6p/VefAmHUNh820LrtLHcOSTqSWdASSeJOtWb0f6vbGFxjYpG7Pa3VrLAtltD2p1AEgCNAefGoP+T7Z+cxLfVS2P2mY/+NXVW9keFvNIifWj+brn27X+atVr0Lu3lxaHDoty5DwrGARlM6yOVSzpj0i+U4XH2goC4e9YQNM5vnYOkaQyGmDq0/OFv7Nz901x1WpVVbzmfU4CEqWz6qms83Z84p/Inf8AKW1v/h2f+4v++vj7R2tB/mdnh/eL/vqX14u+yfI107j72fP/AIqP+OP7/wCxmpI3enDLpPlWk8J7CfZH3Vmqz/RD7P4VpXCewn2R91c+F1Z7vpF2KXj/ABOtFFFdh8uFRHrT/qDfbt/vCpNj8Tu7b3MrPkUtlQSzQOAHMmq16V9IsRi8ObIwGISWU5slxvZM8N0PvrKtJKLR6OzKM5V4VFopK+aI71f/AJzwvnd/yblXpVFdHbOIw2KtYj5JiGFoscu6uCcyMnHIY9qfSrU6NdIruKd1fCXbCqoOZ8wBJPAZkWTGtZYaSS3Xqeht2lKdXpY2cUlndd7534khrNWN9l/Jvxq5trdMbtq89tMBfuKhgOA8N4iLbCPWqnv7GxLBh8mxAzT/AGNzn+rVMTJStY6dh05UVN1LK9rZrnzLN60Nv2lweJwisTiLlmFQK2ofT2oyjSTqap3aVhntOqiWIgDhUz60ulD39n3bb4N8PmKRccOJKsGCgtbWSY7++qSsuY4n3mtXB1XdPTkcNHERwMJU5Qd5rPrLmsrLLXjc77UwNy1G8XLmOmoPDyr7sDZ2/vKpJFvMu8YcVtkwzAczlnSKQu095/AU7dDbbtjcIttSzHEW9BrMOp4dwAJPcK6HvbvM8m9LpL2e73XV/wBbW/Ysbpdi8O99vkxG5W2iWxBWAlsLEMARERXjrw2nYxaYW5h3ziytxbnZZYzG3l9oCdQ3Cr9+S2/qL+yKqH8o6wq4XClVA+dYaCPoTy8hWEKUoybvry/6d+Jx9GvSjT3Gt1WXWXcternpyKNw/LxmpDbxyXU3N05TxVjwkcJ+7xFRzAiWjnSknM/pW8oKRxYfEyot2zTyaejXniXd1L4izhUxO/upbLtby5mGoUNqD3S1SzpJ0+soht4U72+4hcqkhT38O2RxhZ8Ypj6mdh2Luzi16xauE3nguitAAVYBI0Eg1YBwtvDWrjYfDoCqMwt21VC5AJCiBxJ09ayan3o2hPCqSe5J8m1b9bfYpvAIVwG0FYMGD4SQwIad63EHWTx1pZ1afnC39m5+6aeOlPSC/i8O9kbPvoXKHNkuN7DBojdCeEcedMHRf5RhcQt84TEPlDCN1cX2hHHIfurjyU420X3PplKdTD1t5KMpXsrr+1L6F4V4u+yfI0ydGukL4pnV8LdsZQCC4YBp8WVdffTXtTpjft3Llr+T77BWKhxnIYcmGW2RBGvGu51I2ufKrB1nUdO2a5r7lL2P6IfZ/CtK4T2E+yPurPVvYeJCZfk9/QRO5uf7atfZXTK6z27TYDEKCVQtlfSYEmbYEDideFcmHkot3Pott0pV4U+js7XvmuXPkTOiiiu4+TCiiigCiiigCiiigKn/ACjmPyCwI0OJWT4i3cj7z7qoJCAuuk6ite9LOj1rH4W5hruiuNGHFXGqsPI8uYkc6yr0h2Dewl65h7wIu2zrGodeTL3gjX4cRFESMmnf8KkXV9jrWH2jhb10sLSXAWbhEgiT+iCQT4A0xXEccRE/ogfGK920gSePefuqzCWZtRGBAIIIOoI1kVTP5St2LODXvuXD7lUf+VceprrJUKmz8WwXLC2LpOhHK2x5Hkp8I5CU/wCUvdl8CnMLePvNsfgaoTaxT2z9JPfpXrD6kmuVpoXX+P4/CuqdlYnU/hWiKs1B1P4fJsnD/p7xv2rjR8Ip5S3iEYEBmE3AQzggrvEyHVuO7zmeOmtfOg2F3WzsGhEEYe1I8SgJ+JNfcPYxSz2gSxXMTB4LbBIGg1i5pw1HjVCWKTexORfm0zlSTrIDCIXiOPaGaeQ765jEYot/RIF1Gp143IOjHktqRH9oT9EiuuIGJk5Tb8NOWTTyO948sh765Ri54pGYTw9nOJjx3cx4mhB5u3MUpvFbYf8AuwWAmFMCJ07WXXnm5RNOyTAmCeZAgT5SY99NCDG5TJtZsqx9rIc0+G8yx4TPKu90YnswV4tm4cN4uX13Wf8AWjlQDlRTPaOMkZt2BpIGuudZjwyZz5kcad1OgkQe6gPtFFFAR7pFZdnGVXOiwVmBqZmOc5D6eFNuMw+INxyq3cjOCNG+jcMactG48oB5U+7XvXw6C0pKwc5AB5GNe+Ypr2PhMRvV3m8CgzJJIiJg/rSPKgOL4O8bSZludg3ZUBizK9xWifszpB4Ryr7ewl3faI+TOOCk6ZgdOX8TyrjicHiyAE3g7JGhK6nOOPqhnw8KX4b5Squ+VwzNOonsTcIEEHhKCgPD3MWu7CZxb3cQEBIYW1I4qTqxjU8QRSvZF/Em4N7ny+KAAjLMk5QRrp6Ck90Yl7VpmVt6M+YAR/aoBw0HYk0kxuHxRmBcnKhXie3ulBEzp2l4nvPfQExqFdZ/QZdpWJSFxNoE2n4T322P1T38jrwkF22JZuC4M4f+04zEEpGp484HnT/QGMrhdHa3cBVkJVlbirKYII75EelJcQ2vhV+ddfV78oRsdhUm+g+eRRrcQD2gOdxR7wO8AHP2aRHMVKLXPLH404bZ27iMUtnf3C+5QWkJ45ASde86xPcB3U3RXYCePpU2IPKtp416VSxVRxJgeZ0rkuhp26J2t5j8In1sRZX0NxfwpwBsTD2gqqo4KAPcIqOY9sW4ujK4yud0V0kAXI1HERk499SemXb+CdyhtgnRg2vlHE/aqpAzXsLit52d7lgcC4+hbB+lxzBvPj3z2s4bE5bgO9EoAh7RhtZPHjqnllpVZ2fe3V8Qyu1vLb7U9oqZ5/Wg8q5YfBX1vJcCNlHFcwHC2ukTxL5tfCaA5jD4iEOW5MSwluMqeMwRo2n+tcBYxebXe5Tx1YgTl5TJgqeH1692sBic3aVimQj2gdZYjSePa9I8KU7YweJZk3atGW1mh+GUvmGp10ZdecUB8tDFpZGXNnza5u0SoYAcZ1ykn0NfExWOgyHkBo+bXXU+H2Y7682tm4jdsMpDZUjWNQbk6yeTLXYYO6wOZDPzp1g6sEiDPeDQDzsh7ptKbwi5rOkfSMaeUV8r1spXFpQ4hhM6zzMa+UUUA19JMLcdlyKzLlbMAYk6gD3E0iw2BvjMGQ6h8uk+0hETOmoXzkUt6VXrmUIll7g9uVnQqdBop402WNnPvFG7cKSJOU/WaZMd3lxPfQAmyr5gsram5I46BhcTnrPs+HjXYbPvDDMuQ5iWkcyp3nv0I99JNoYW/vXC23yFrkQrR2ntNOgj2Ufznxp1wt66uRYuBRH0CdSbuYEwSNN2fd3mgEKYHE5LgKHtaiTPEmefcF99d9jbLuzcW5nVblt1mRIJYwRx1ynj+jXnbeGub52W2xDCCQpM9lBxA14EVyxOCuC2rW0ed+JGUghO1Mjnyk8zrzoD4+yLqgoqMQMwUmCfaOUyIAJGsxp610wGzroQBrcENbJlZkAPPPxAgcKbnwd6f6O5BC/RYjMH8u8zPhNLMbhbvya2FRy4DQFRgR84pM+YEAR391Adtk7NvLessykBVGcyNTkYa95zVVfXV1cmw7bQwi/MsZvW1H9Gx+mAPoE8R9E+B7NxbBw7rdYlSoKDipHanXXmeFPl22GBVgCrAggiQQeII5igMULcnU616gcY0qddbvQMbNvi7aP81vscizrbYalP0l5g92h4S0CK8xr3VZMse3tz4EcDTj0O2pbwuOw+IuqxS1cDMFAJ07gSBMwePKmuW9Ryrw5zRA1oQ0a52H072diyos4q2WfgjEoxPdlaCT4CpJWMMBbkqCYGkk8vGtQdVNm4uzbW8vG/JcrcJYymY5dW1j+OFZRld2NalLcSZL6KKKuYkFGwb2f+hIGuudBqwgiBxAGtKBsrE8WtyTmJhl9p8s8+Ej7u6lXSzZWYi6u8LE5SEJ0AUkHQHmI4fS8hTVhEubu9Fq+rPlABBiQc2gyggaETQDmmybvzwNvNmuBl1UDLmuHXXkGGnlx1FcMTsW/LlUEEFQOyOIcHSY+kPOvOBS8FvMyPM5kBVsxGdGIB7pkRzgd1JrOGuhLYK3C6hA3ZbgDaLifFZHmQfoxQEw2TYKWgpGUyxjTmxPLzmivuybRSzbUzIUTPGTqfjXygGrpdi2VbaK1xCWzZk7gD2TqOPH0phwm0bpDFbl9oKntTAGewW1LkmED/ALR9ZZtizimy/J7iJEyGEz3Gcp4fjTHf2zfRCDcDXAbq+yIlQFX6I03gagEOHxt/tTccsEcwXYdsW5AjzjT/AFrri8beAUi5czbu2xGY6nKrERPE9oU54Da9x2JL6ErCwuil7YOsTwYj38NKS4LbN5ws3YYoCyhF0bIhOpH1s2nif0aA74La11VsqWGpIYsCxPzjLxnmoB91Nu1tpsb9wB76AMRAJHsgjTtgQYnhzHjTiNrXvk7XA0sLiLJC+ybak8BHEk16u7Vu7jMLgD8jlBkk3ABERxVfQHyIDZfx17hvLkg3MvaYZjqVmOUGOfDwpdYxrlLhLvOYsBnMwLluNAdBB9Qda7bL2vduXlluw7Hswui5WYaxM6Aca5Ynal4XcgukTcZRIThmSPo8pI9aAbnxt3WbtwAg/wBow5PPA6QOY8/oipdsV5sgyzavqxk6OePd5cuHKkGGx1w3bQLmGADAZfa3Yc8p5jh4+FPtAUd+Uw5/mK8vnz6/Nf6/GqRtXI8quj8pe585gl7lvH3m2PwqlQO+pRIpSOXu50Isac684FGZ1RFzO5CqOZZjAA8ZrpZ1k/xPOqzlkbUYqUh42DsK/jLqYewstdME/UQEZnY8lEjz4DUitYYbArYwy2LUhbVoIneAqwNe/TjVe9QuzVXC3cRAzXHCAj6iKDH7TN7h3VNjjiHPavnX2d3K6cgRb1B8z5iqwWRFeV5sYdl7QvG9aDXHIaM0seIYD4z8KSNtO6UUm64OWHO8ZYyqwnQ82B19eQqVYjaO8AULeQmCCEceME5YHIamjCbSCjKVutpmlkeY109niI4eIiauYjDY2hda5BuPBNyRmIhSHZTodOAjzp12/gro3l4Yi4qQoCKTodBI7QH/ALrp87dS6tq7cV37SG4pUIM3ASokRPeeExNNeNxuItFk3hZgyg8wJtOefe+T4UByu4y9kaLj5la6fbJ9l1VRHACHHn6V9u45t5DXnAzINHbgbdssfCAWMeObjSvCYu61sk3CZOnaj++BEjl2V91Nn8u4gK3bJIIgwNYDg8uBIX3igJdsC6zWEZiSTmkkz9I8z4UV32eSU1JOrcTP0jRQHTFYgW0LtwXU+VNx23YjNykiezxETOunEe+le1LJe0yqJJjSY0zCde+Jph/krETJUejjjrr7PfGv/FAL06QYVphkPfDWz4/W7h8PCvtvb+GJIDKSJJ7VufGe14CkQ2biPGNNc4JnnxEcz8KF2fieYk/bEfdQC1ekOG0UOmsQM1vWdBHa4cNaW4DFW7oLIAR39k9/cT40ynZ2J5A8uNwcYE6xwmY9Kc9jWLiZt4sTEHMDw5ffQCC90wwiXjZOfOH3ZItnKHJgDPwBMj3jvFSDdjjAnyqL4noeWvNc+UMFa5vCmXnMxmzTlmJHPyJFSqgPO7EzAnvivVFFAUp+Ubsi63yTEIpZRntGNSGaGXTxCv7vGqRs2AQSTHd/HM+Hxrat9QykGNQR7xFY1CASrAyNI8qpOVjooU1O9x+6ptmm9tbDQOzabfOTwVbYmf2so9aatpXLb4q+cOALLXrhtADKN2XOWByGWNK6YDaDWN61m5lNy09ptPaS4IYfDj3xUj6rehLbQxALKRhrRButwDc92DzZuccFk8Ss1ct7I1jBUm5PQu3qj2e1nZeHze1cDXfRySv+DLUu3S/VHur0qgAACANAB3V9rRKyOOTu7njdL9Ue4Ubpfqj3Cma1Z2gBBuYdjprlYcOOg79R/pyUXflk9n5MBOk7wmJOnLWI189KkgclQDgAPSuGNxC2xmZSZIGgHH1I7vuFKaSbUw5uWyoCkkqQG4dlgdfdQCNttWso7DnMNQFDQCSNQDp58IM19TbNormyOAFDmViBJnXgSIkgSdR303PsG6VyndweOp1GunDhLNQ2wbxV1lQHENlZlJEk8QNNWJ08uFASSy8iYjUiNOIMHh418rls60621DkFhMka8yePlRQCmiiigCiiigCiiigCiiigCvLJPf76LjwJgmO4SfdXH5WPq3P2DQDdtHZ9i4d26OxidLjroTHJhrUZbq32L7Zsntdqd/iBIMazvNdWX3ipezqbmcrcnLlHYMCCTPCZpI2BtwqfPwq5BCRpKyZC8TkE98nvqrubR6Pi2iOjqv2K5P8ANyTz+fv6SSP7zTUEelPmyNkYHCW1Wx83bAzAC7cIggtOrGZAYz4Gltm0iliBd7QAIyHgCTpppqzH1NeLeHthswF7jI7B01cx7PDtsPKKZj1eebHRFHKfea90iwt1UVbYW5CqFBKHkI1IETpXUYsSBlfX9A/Huqxk7XyFFFFFCAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooD//Z"
  },
  {
    id: 2,
    name: "JENIFA",
    thumbnail: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiFs4Dq1rngAhVMZFAKHQ_cAskQjRx6BAgBEAU&url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2Fdvd-the-lion-king-matthew-broderick%2F3902556&psig=AOvVaw22dv7oisCHzy_jhy9r4czr&ust=1550180571005725"
  },
  {
    id: 3,
    name: "CHIEF DADDY",
    thumbnail: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiFs4Dq1rngAhVMZFAKHQ_cAskQjRx6BAgBEAU&url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2Fdvd-the-lion-king-matthew-broderick%2F3902556&psig=AOvVaw22dv7oisCHzy_jhy9r4czr&ust=1550180571005725"
  },
  {
    id: 4,
    name: "UPNORTH",
    thumbnail: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiFs4Dq1rngAhVMZFAKHQ_cAskQjRx6BAgBEAU&url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2Fdvd-the-lion-king-matthew-broderick%2F3902556&psig=AOvVaw22dv7oisCHzy_jhy9r4czr&ust=1550180571005725"
  },
]    
  };
}
  render() {
    return (
      <View style={{flex: 1,backgroundColor: '#000F21'}}>
      <StatusBar backgroundColor='transparent' translucent={true} barStyle='light-content'/>
      <View style={styles.head}>
      <Image resizeMode="contain" style={{width: 20, height: 25}} source={require('../menu.png')}/>
      <Text style={{fontSize: 14, color: 'white', fontFamily: 'mont-bold'}}>HOME</Text>
      <Image resizeMode="contain" style={{width: 20, height: 25}} source={require('../search.png')}/>
      </View>
      <ScrollView keyboardShouldPersistTaps='always'
                                                       overScrollMode={'never'}
                                                         showsVerticalScrollIndicator={false}
                                                         automaticallyAdjustContentInsets={false}
                                                         directionalLockEnabled={true}
                                                         bounces={false}
                                                         scrollsToTop={false}>
      <Text style={{fontSize: 12, color: 'white', marginBottom: 10, fontFamily: 'mont-bold',marginLeft: 10 }}>
       RECOMMENDED
      </Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} 
      contentContainerstyle={{flexGrow:1,
                        flexDirection: 'row',}} 
                                    keyboardShouldPersistTaps='always'
                                                       overScrollMode={'never'}
                                                         showsVerticalScrollIndicator={false}
                                                         automaticallyAdjustContentInsets={false}
                                                         directionalLockEnabled={true}
                                                         bounces={false}
                                                         scrollsToTop={false}
      >
      <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('Details', 
                )}
                >
                    <View style={{flexDirection: 'column', width: 300, height: 170, marginLeft: 10}}>
                        <View style={{width: 300, height: 120, marginBottom: 10,}}>
                                <Image resizeMode="cover"
                                   style={{width: 300, height: 120, 
                                   borderRadius: 4, }}
                                   source={require('../upNorth.jpg')}/>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: 280}}>
                          <Text style={{fontSize: 14, fontFamily: 'mont-bold', color: '#F2BB66'}}>
                          UPNORTH</Text>
                        
                        <View style={{width: 120, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <View style={{width: 22, height: 20, }}>
                          <Image 
                          resizeMode="contain" style={{width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        </View></View>
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback 
       onPress={() =>
                this.props.navigation.navigate('Details', 
                )}
                >
                    <View style={{flexDirection: 'column', width: 300, height: 170, marginLeft: 10}}>
                        <View style={{width: 300, height: 120, marginBottom: 10,borderRadius: 4,}}>
                                <Image resizeMode="cover"
                                   style={{width: 300, height: 120, 
                                    }}
                                   source={require('../skinnyGirl.jpg')}/>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: 280}}>
                          <Text style={{fontSize: 14, fontFamily: 'mont-bold', color: '#F2BB66'}}>
                          SKINNY GIRL</Text>
                        
                        <View style={{width: 120, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <View style={{width: 22, height: 20, }}>
                          <Image 
                          resizeMode="contain" style={{width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        </View></View>
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback 
        onPress={() =>
                this.props.navigation.navigate('Details', 
                )}
                >
                    <View style={{flexDirection: 'column', width: 300, height: 170, marginLeft: 10}}>
                        <View style={{width: 300, height: 120, marginBottom: 10,borderRadius: 4,}}>
                                <Image resizeMode="cover"
                                   style={{width: 300, height: 120, 
                                    }}
                                   source={require('../jenifasDiary.jpg')}/>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: 280}}>
                          <Text style={{fontSize: 14, fontFamily: 'mont-bold', color: '#F2BB66'}}>
                          JENIFA'S DIARY</Text>
                        
                        <View style={{width: 120, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <View style={{width: 22, height: 20, }}>
                          <Image 
                          resizeMode="contain" style={{width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        </View></View>
                    </View>
                    </TouchableNativeFeedback>

                    </ScrollView>  
      <Text style={{fontSize: 12, color: 'white', marginBottom: 15, marginTop: 10, fontFamily: 'mont-bold', marginLeft: 10}}>
       POPULAR
      </Text>
      <Carousel
                data={this.state.entries}
                renderItem={this._renderItem.bind(this)}
             //   hasParallaxImages={true}
                windowSize={1}
                itemWidth={200}
                sliderWidth={Dimensions.get('window').width}
                itemHeight={250}
                layout={'default'}
                firstItem={1}
            />
        <Text style={{fontSize: 12, color: 'white', marginBottom: 15, marginTop: 10, fontFamily: 'mont-bold', marginLeft: 10}}>
       TV SHOWS
      </Text> 
      <View style={{flexDirection: 'row', width: '90%', height: 140, justifyContent: 'space-between', alignSelf: 'center'}}>
      <Image resizeMode={'contain'} source={require('../chiefDaddy.jpg')}
      style={{width: '25%', height: 140, borderWidth: 3, borderColor: 'white'}}/>
      <Image resizeMode={'contain'} source={require('../skinnyGirl.jpg')}
      style={{width: '25%', height: 140, borderWidth: 3, borderColor: 'white'}}/>
      <Image resizeMode={'contain'} source={require('../jenifasDiary.jpg')}
      style={{width: '25%', height: 140, borderWidth: 3, borderColor: 'white'}}/>
      </View>  
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    head: {
        height: 80,
        flexDirection: 'row', 
        elevation: 0.5,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: 'orange', 
        marginBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: StatusBar.currentHeight

    },
  bottomButton:{
    width: '100%',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  /*  position:'absolute',
    bottom: 0*/
},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
