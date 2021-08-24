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
            document.getElementById('out').innerHTML='Tuổi của hai bạn thuộc tam hợp là bộ 3 tuổi hợp nhau về tính cách, có tính chất cuộc sống tương đồng nhau, môi trường sống tương tự nhau. ' +
                                                                ' Nhưng không phải là 3 tuổi trong tam hợp sẽ hoàn toàn hợp nhau, nên khi xem tuổi lấy vợ lấy chồng, chúng ta cần xem thêm nhiều yếu tố khác. '+
                                                                    ' Nếu bạn không thường xuyên quan tâm và chăm sóc đến người ấy, không làm cho người đó cười, nếu bạn không chăm sóc bản thân và phấn đấu hơn ' +
                                                                        ' trong học tập và làm việc, thì nguy cơ không thành đôi cúng rất lớn. Nên nhớ một điều là tình yêu quan trọng nhất là sự thủy chung, quan tâm và ' +
                                                                            'luôn đặt mình vào vị trí của đối phương, thấu hiểu và cảm thông cho nhau'
            break}
        case 'khac':{
            document.getElementById('out').innerHTML='Tuổi của hai bạn thuộc tứ hành xung những con giáp khắc khẩu hoặc áp chế nhau trong các phương diện cuộc sống được xếp vào cùng nhóm tứ hành xung. '+
            'các bạn thường sẽ gặp cãi vã, khắc khẩu, áp chế nhau trong các phương diện của cuộc sông. Nhưng trong tình yêu đó không phải điều quan trọng, thấu hiểu và nhịn nhường,' +
                ' mỗi người nhường đối phương một bước thì gia đình sẽ hòa thuận hơn' +
                ' và nếu tình yêu đủ lớn để bỏ qua sự khác biệt, đối nghịch với nhau thì các bạn vẫn có thể bên nhau đén cuối con đường.' +
                ' Hợp nhau không là do bản thân mình có đủ yêu để tha thứ cho nhau hay không nên đừng vì những nóng giận nhất thời hay vì' +
                ' lời nói ra vào của người ngoài mà nghi ngờ rồi đánh mất đi người thực sự yêu mình.'
            break
            }
        case 'nope':{
            document.getElementById('out').innerHTML='Tuổi của hai bạn không thuộc tam hợp cũng không thuộc tứ hành xung. Nên nếu thực sự yêu đối phương, hãy cứ bình tĩnh mà tiến tới, bình tĩnh tìm hiểu' +
                ' và hãy luôn cố gắng làm người ấy mỉm cười và luôn hạnh phúc. Cùng nhau gìn giữ thật chặt mối quan hệ, thủy chung và thấu hiểu thì hai bạn sẽ bên nhau đến cuối cuộc đời'
            break}
        }

}