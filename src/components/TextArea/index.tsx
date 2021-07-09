import { Container} from './styled';

 
export default function TextArea({placeholder}: any) {

    return (
        <Container >            
            <input placeholder={placeholder}/>
        </Container>
    );
}