import './collection.scss'
import { BoxAnRight } from '../../BoxAnimate/BoxAnimate';

const Collection = () => {
    return (
        <div className='collection' id='coleccion'>
            <BoxAnRight>
                <h2>Colección</h2>
            </BoxAnRight>
            <div className='containerCards'>
                <div className='card'>
                    <div className='face front'>
                        <img src="card1.png" alt="" />
                        <h3>Sillon</h3>
                    </div>
                    <div className='face back'>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod expedita aliquam molestiae? Blanditiis dolores accusantium aliquam ad praesentium iste facere recusandae ex placeat voluptates! Et dolorum magnam sit distinctio ab?
                        </p>
                        <div className='separador'></div>
                        <a href="#">mas...</a>
                    </div>
                </div>
                <div className='card'>
                    <div className='face front'>
                        <img src="card2.png" alt="" />
                        <h3>Armario</h3>
                    </div>
                    <div className='face back'>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod expedita aliquam molestiae? Blanditiis dolores accusantium aliquam ad praesentium iste facere recusandae ex placeat voluptates! Et dolorum magnam sit distinctio ab?
                        </p>
                        <div className='separador'></div>
                        <a href="#">mas...</a>
                    </div>
                </div>
                <div className='card'>
                    <div className='face front'>
                        <img src="card3.png" alt="" />
                        <h3>Mesa</h3>
                    </div>
                    <div className='face back'>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod expedita aliquam molestiae? Blanditiis dolores accusantium aliquam ad praesentium iste facere recusandae ex placeat voluptates! Et dolorum magnam sit distinctio ab?
                        </p>
                        <div className='separador'></div>
                        <a href="#">mas...</a>
                    </div>
                </div>
                <div className='card'>
                    <div className='face front'>
                        <img src="card4.png" alt="" />
                        <h3>Cama</h3>
                    </div>
                    <div className='face back'>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod expedita aliquam molestiae? Blanditiis dolores accusantium aliquam ad praesentium iste facere recusandae ex placeat voluptates! Et dolorum magnam sit distinctio ab?
                        </p>
                        <div className='separador'></div>
                        <a href="#">mas...</a>
                    </div>
                </div>
                <div className='card'>
                    <div className='face front'>
                        <img src="card5.png" alt="" />
                        <h3>Silla</h3>
                    </div>
                    <div className='face back'>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod expedita aliquam molestiae? Blanditiis dolores accusantium aliquam ad praesentium iste facere recusandae ex placeat voluptates! Et dolorum magnam sit distinctio ab?
                        </p>
                        <div className='separador'></div>
                        <a href="#">mas...</a>
                    </div>
                </div>
                <div className='card'>
                    <div className='face front'>
                        <img src="card6.png" alt="" />
                        <h3>Mesa de TV</h3>
                    </div>
                    <div className='face back'>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod expedita aliquam molestiae? Blanditiis dolores accusantium aliquam ad praesentium iste facere recusandae ex placeat voluptates! Et dolorum magnam sit distinctio ab?
                        </p>
                        <div className='separador'></div>
                        <a href="#">mas...</a>
                    </div>
                </div>
                <div className='card'>
                    <div className='face front'>
                        <img src="card7.png" alt="" />
                        <h3>Estanteria</h3>
                    </div>
                    <div className='face back'>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod expedita aliquam molestiae? Blanditiis dolores accusantium aliquam ad praesentium iste facere recusandae ex placeat voluptates! Et dolorum magnam sit distinctio ab?
                        </p>
                        <div className='separador'></div>
                        <a href="#">mas...</a>
                    </div>
                </div>
                <div className='card'>
                    <div className='face front'>
                        <img src="card8.png" alt="" />
                        <h3>Puff</h3>
                    </div>
                    <div className='face back'>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod expedita aliquam molestiae? Blanditiis dolores accusantium aliquam ad praesentium iste facere recusandae ex placeat voluptates! Et dolorum magnam sit distinctio ab?
                        </p>
                        <div className='separador'></div>
                        <a href="#">mas...</a>
                    </div>
                </div>
                {/* s */}
            </div>
        </div>
    );
};

export default Collection;