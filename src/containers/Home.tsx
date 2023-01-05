import { Box, Button, Center,Square,Image,Text } from "@chakra-ui/react";
import "../styles/Home.scss";

const imgTilapia = new URL("../assets/pexels-photo-511088.jpg", import.meta.url).href;
const Foodimg = new URL("../assets/pexels-photo-428355.jpeg", import.meta.url).href;
const Askimg = new URL("../assets/pexels-photo-247487.jpg", import.meta.url).href;

function Home(){
    return(
        <div className="Home">
            <div>
                <Image src={imgTilapia} className="img-responsive"/>
            </div>
            <Box w="100%" p={4} color="white" className="background-box">
                <p className="paragraph">
                    Combinamos generaciones de experiencia en acuicultura con la
                    tecnología más reciente y avanzada de sistemas de recirculación
                    (Poseidón), a fin de crear soluciones de cultivo seguro y sostenible,
                    basadas en datos, para la producción local de pescados.
                </p>
                <Center>
                    <Button colorScheme="gray" color="black">Conocenos</Button>
                </Center>
            </Box>
            <div className="flex-food">
                <div className="item-food">
                    <Image src={Foodimg}/>
                </div>
                <div className="item-food background-food">
                    <Square>
                        <Text className="paragraph-food">
                            Una plataforma inteligente y sostenible para la producción terrestre de
                            peces naturales, saludables y nutritivos.
                        </Text>
                    </Square>
                    <Center>
                        <Button colorScheme="gray" color="black">Soluccion</Button>
                    </Center>
                </div>
            </div>
            <div className="content-ask">
                <Image src={Askimg} className="img-responsive"/>
                <div className="content-ask-header">
                    <p>
                        Únase a nosotros para hacer que los nutritivos productos del río sean
                        accesibles a todos.
                    </p>
                    <h2>Pregúntanos lo que quiera</h2>
                    <span>¿Tiene preguntas?</span>
                    <br />
                    <span>Nosotros tenemos respuestas</span>
                    <br />
                    <Button colorScheme="gray">Contactanos</Button>
                </div>
            </div>
        </div>
    );
};

export default Home;