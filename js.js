function abala(){
    let nam= document.getElementById('nam').value
    let nu= document.getElementById('nu').value
    nam =nam%60
    nu =nu%60
    let hop=''
    switch (nam) {
        case 4 :
        case 16 :
        case 28 :
        case 40 :
        case 52 :
            nam = 'ty'
            break
        case 5 :
        case 17 :
        case 29 :
        case 41 :
        case 53 :
            nam = 'suu'
            break
        case 54 :
        case 6 :
        case 18 :
        case 30 :
        case 42 :
            nam = 'dan'
            break
        case 55 :
        case 7 :
        case 19 :
        case 31 :
        case 43 :
            nam = 'mao'
            break
        case 44 :
        case 56 :
        case 8 :
        case 20 :
        case 32 :
            nam = 'thin'
            break
        case 45 :
        case 57 :
        case 9 :
        case 21 :
        case 33 :
            nam = 'ti'
            break
        case 34 :
        case 58 :
        case 10 :
        case 22 :
        case 46 :
            nam = 'ngo'
            break
        case 35 :
        case 47 :
        case 59 :
        case 11 :
        case 23 :
            nam = 'mui'
            break
        case 24 :
        case 36 :
        case 48 :
        case 0 :
        case 12 :
            nam = 'than'
            break
        case 25 :
        case 37 :
        case 49 :
        case 1 :
        case 13 :
            nam = 'dau'
            break
        case 14 :
        case 26 :
        case 38 :
        case 50 :
        case 2 :
            nam = 'tuat'
            break
        case 15 :
        case 27 :
        case 39 :
        case 51 :
        case 3 :
            nam = 'hoi'
            break
    }
    switch (nu){
        case 4 :
        case 16 :
        case 28 :
        case 40 :
        case 52 : nu='ty'
            break
        case 5 :
        case 17 :
        case 29 :
        case 41 :
        case 53 : nu='suu'
            break
        case 54 :
        case 6 :
        case 18 :
        case 30 :
        case 42 : nu='dan'
            break
        case 55 :
        case 7 :
        case 19 :
        case 31 :
        case 43 : nu='mao'
            break
        case 44 :
        case 56 :
        case 8 :
        case 20 :
        case 32 : nu='thin'
            break
        case 45 :
        case 57 :
        case 9 :
        case 21 :
        case 33 : nu='ti'
            break
        case 34 :
        case 58 :
        case 10 :
        case 22 :
        case 46 : nu='ngo'
            break
        case 35 :
        case 47 :
        case 59 :
        case 11 :
        case 23 : nu='mui'
            break
        case 24 :
        case 36 :
        case 48 :
        case 0 :
        case 12 : nu='than'
            break
        case 25 :
        case 37 :
        case 49 :
        case 1 :
        case 13 : nu='dau'
            break
        case 14 :
        case 26 :
        case 38 :
        case 50 :
        case 2 : nu='tuat'
            break
        case 15 :
        case 27 :
        case 39 :
        case 51 :
        case 3 : nu='hoi'
            break

    }
    switch (nam) {
        case 'ty':{
            switch (nu){
                case 'thin':
                case 'than': hop='hop'
                    break
                case 'ngo':
                case 'mao':
                case 'dau': hop='khac'
                    break
                default : hop='nope'
            }break
        }
        case 'suu':{
            switch (nu){
                case 'dau':
                case 'ti': hop='hop'
                    break
                case 'mui':
                case 'thin':
                case 'tuat': hop='khac'
                    break
                default : hop='nope'
            }break
        }
        case 'dan':{
            switch (nu){
                case 'tuat':
                case 'ngo': hop='hop'
                    break
                case 'than':
                case 'ti':
                case 'hoi': hop='khac'
                    break
                default : hop='nope'
            }break
        }
        case 'mao':{
            switch (nu){
                case 'mui':
                case 'hoi': hop='hop'
                    break
                case 'ti':
                case 'ngo':
                case 'dau': hop='khac'
                    break
                default : hop='nope'
            }break
        }
        case 'thin':{
            switch (nu){
                case 'ty':
                case 'than': hop='hop'
                    break
                case 'tuat':
                case 'suu':
                case 'mui': hop='khac'
                    break
                default : hop='nope'
            }break
        }
        case 'ti':{
            switch (nu){
                case 'su':
                case 'dau': hop='hop'
                    break
                case 'hoi':
                case 'than':
                case 'dan': hop='khac'
                    break
                default : hop='nope'
            }break
        }
        case 'ngo':{
            switch (nu){
                case 'dan':
                case 'tuat': hop='hop'
                    break
                case 'ty':
                case 'dau':
                case 'mao': hop='khac'
                    break
                default : hop='nope'
            }break
        }
        case 'mui':{
            switch (nu){
                case 'hoi':
                case 'mao': hop='hop'
                    break
                case 'tuat':
                case 'suu':
                case 'thin': hop='khac'
                    break
                default : hop='nope'
            }break
        }
        case 'than':{
            switch (nu){
                case 'thin':
                case 'ty': hop='hop'
                    break
                case 'dan':
                case 'hoi':
                case 'ti': hop='khac'
                    break
                default : hop='nope'
            }break
        }
        case 'dau':{
            switch (nu){
                case 'suu':
                case 'ti': hop='hop'
                    break
                case 'ty':
                case 'mao':
                case 'ngo': hop='khac'
                    break
                default : hop='nope'
            }break
        }
        case 'tuat':{
            switch (nu){
                case 'ngo':
                case 'dan': hop='hop'
                    break
                case 'mui':
                case 'suu':
                case 'thin': hop='khac'
                    break
                default : hop='nope'
            }break
        }
        case 'hoi':{
            switch (nu){
                case 'mui':
                case 'mao': hop='hop'
                    break
                case 'ti':
                case 'dan':
                case 'than': hop='khac'
                    break
                default : hop='nope'
            }break
        }
    }
    switch (hop){
        case 'hop':{
            document.getElementById('out').innerHTML='Tu???i c???a hai b???n thu???c tam h???p l?? b??? 3 tu???i h???p nhau v??? t??nh c??ch, c?? t??nh ch???t cu???c s???ng t????ng ?????ng nhau, m??i tr?????ng s???ng t????ng t??? nhau. ' +
                                                                ' Nh??ng kh??ng ph???i l?? 3 tu???i trong tam h???p s??? ho??n to??n h???p nhau, n??n khi xem tu???i l???y v??? l???y ch???ng, ch??ng ta c???n xem th??m nhi???u y???u t??? kh??c. '+
                                                                    ' N???u b???n kh??ng th?????ng xuy??n quan t??m v?? ch??m s??c ?????n ng?????i ???y, kh??ng l??m cho ng?????i ???? c?????i, n???u b???n kh??ng ch??m s??c b???n th??n v?? ph???n ?????u h??n ' +
                                                                        ' trong h???c t???p v?? l??m vi???c, th?? nguy c?? kh??ng th??nh ????i c??ng r???t l???n. N??n nh??? m???t ??i???u l?? t??nh y??u quan tr???ng nh???t l?? s??? th???y chung, quan t??m v?? ' +
                                                                            'lu??n ?????t m??nh v??o v??? tr?? c???a ?????i ph????ng, th???u hi???u v?? c???m th??ng cho nhau'
            break}
        case 'khac':{
            document.getElementById('out').innerHTML='Tu???i c???a hai b???n thu???c t??? h??nh xung nh???ng con gi??p kh???c kh???u ho???c ??p ch??? nhau trong c??c ph????ng di???n cu???c s???ng ???????c x???p v??o c??ng nh??m t??? h??nh xung. '+
            'c??c b???n th?????ng s??? g???p c??i v??, kh???c kh???u, ??p ch??? nhau trong c??c ph????ng di???n c???a cu???c s??ng. Nh??ng trong t??nh y??u ???? kh??ng ph???i ??i???u quan tr???ng, th???u hi???u v?? nh???n nh?????ng,' +
                ' m???i ng?????i nh?????ng ?????i ph????ng m???t b?????c th?? gia ????nh s??? h??a thu???n h??n' +
                ' v?? n???u t??nh y??u ????? l???n ????? b??? qua s??? kh??c bi???t, ?????i ngh???ch v???i nhau th?? c??c b???n v???n c?? th??? b??n nhau ????n cu???i con ???????ng.' +
                ' H???p nhau kh??ng l?? do b???n th??n m??nh c?? ????? y??u ????? tha th??? cho nhau hay kh??ng n??n ?????ng v?? nh???ng n??ng gi???n nh???t th???i hay v??' +
                ' l???i n??i ra v??o c???a ng?????i ngo??i m?? nghi ng??? r???i ????nh m???t ??i ng?????i th???c s??? y??u m??nh.'
            break
            }
        case 'nope':{
            document.getElementById('out').innerHTML='Tu???i c???a hai b???n kh??ng thu???c tam h???p c??ng kh??ng thu???c t??? h??nh xung. N??n n???u th???c s??? y??u ?????i ph????ng, h??y c??? b??nh t??nh m?? ti???n t???i, b??nh t??nh t??m hi???u' +
                ' v?? h??y lu??n c??? g???ng l??m ng?????i ???y m???m c?????i v?? lu??n h???nh ph??c. C??ng nhau g??n gi??? th???t ch???t m???i quan h???, th???y chung v?? th???u hi???u th?? hai b???n s??? b??n nhau ?????n cu???i cu???c ?????i'
            break}
        }

}