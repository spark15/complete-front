import React from 'react';
import Nav from '../Component/Navbar';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Community(){
    const location = useLocation();
    const state = location.state.user;
    const navigate = useNavigate();

    const textinfo = [{
        title: "This is title",
        content: "This is contentThis is contentThis is contentThis is contentThis is contentThis is contentThis is content",
    }]
    const gotoinfo1 = () =>{
        navigate('/info1',{state:{user:true}});
    }
    return(
        <div className='education-background'>
            <Nav user = {state}></Nav>
            
                    <div className='info1' onClick={gotoinfo1}>
                        <p className='info1_title'>{textinfo[0].title}</p>
                    </div>
                    <div className='info2'>
                        <p className='info2_title'>{textinfo[0].title}</p>
                    </div>
                    <div className='info3'>
                        <p className='info2_title'>{textinfo[0].title}</p>
                    </div>
                <div className='main'>
                    <input type="radio" id="tab-1" name="show" />
                    <input type="radio" id="tab-2" name="show" />
                    <input type="radio" id="tab-3" name="show" />
                    <input type="radio" id="tab-4" name="show" />
                    <div class="tab">
                        <label for="tab-1">Breed</label>
                        <label for="tab-2">Common Sense</label>
                        <label for="tab-3">Medical</label>
                        <label for="tab-4">Training</label>
                    </div>
                    <div class="content">
                    <div class="content-dis">
                        <div className='BORDER_COLLIE_img'>
                            <img className='BORDER_COLLIE_img' src='Border-Collie.webp' alt='Border-Collie'></img>
                            <p className='BORDER_COLLIEInfo'>BORDER COLLIE</p>
                        </div>
                        <div className='BORDER_COLLIE_img'>
                            <img className='BORDER_COLLIE_img' src='Border-Collie.webp' alt='Border-Collie'></img>
                            <p className='BORDER_COLLIEInfo'>BORDER COLLIE</p>
                        </div>
                        <div className='BORDER_COLLIE_img'>
                            <img className='BORDER_COLLIE_img' src='Border-Collie.webp' alt='Border-Collie'></img>
                            <p className='BORDER_COLLIEInfo'>BORDER COLLIE</p>
                        </div>
                        <div className='BORDER_COLLIE_img'>
                            <img className='BORDER_COLLIE_img' src='Border-Collie.webp' alt='Border-Collie'></img>
                            <p className='BORDER_COLLIEInfo'>BORDER COLLIE</p>
                        </div>
                        <div className='BORDER_COLLIE_img'>
                            <img className='BORDER_COLLIE_img' src='Border-Collie.webp' alt='Border-Collie'></img>
                            <p className='BORDER_COLLIEInfo'>BORDER COLLIE</p>
                        </div>
                    </div>
                    <div class="content-dis">
                        <div className='common-sense'>
                            <p className='common-sense-title'>Do dogs sweat, too?</p>
                            <p className='common-sense-content'>Yes, dogs have two sweat glands, one on the soles of their feet and one all over their body. The sweat glands on the soles of the feet are sweat glands to secrete sweat. You can also see that the dog's footprints remain in the summer. The other is found throughout the body, which is sweat glands to produce smell, and dogs distinguish each other by this smell.</p>
                        </div>
                        <div className='common-sense'>
                            <p className='common-sense-title'>Do dogs sweat, too?</p>
                            <p className='common-sense-content'>Yes, dogs have two sweat glands, one on the soles of their feet and one all over their body. The sweat glands on the soles of the feet are sweat glands to secrete sweat. You can also see that the dog's footprints remain in the summer. The other is found throughout the body, which is sweat glands to produce smell, and dogs distinguish each other by this smell.</p>
                        </div>
                        <div className='common-sense'>
                            <p className='common-sense-title'>Do dogs sweat, too?</p>
                            <p className='common-sense-content'>Yes, dogs have two sweat glands, one on the soles of their feet and one all over their body. The sweat glands on the soles of the feet are sweat glands to secrete sweat. You can also see that the dog's footprints remain in the summer. The other is found throughout the body, which is sweat glands to produce smell, and dogs distinguish each other by this smell.</p>
                        </div>
                        <div className='common-sense'>
                            <p className='common-sense-title'>Do dogs sweat, too?</p>
                            <p className='common-sense-content'>Yes, dogs have two sweat glands, one on the soles of their feet and one all over their body. The sweat glands on the soles of the feet are sweat glands to secrete sweat. You can also see that the dog's footprints remain in the summer. The other is found throughout the body, which is sweat glands to produce smell, and dogs distinguish each other by this smell.</p>
                        </div>
                    </div>
                    <div class="content-dis">
                        <div className='Health'>
                            <p className='Health-title'>How to care for your pregnant dog</p>
                            <p className='Health-content'>hormonal changes and maternal instincts cause pregnant dogs to change their behavior and may become less active and have a reduced appetite. It is essential to care for pregnant dogs by feeding them premium adult food that is high in protein, fat, and minerals. exercise for pregnant dogs should be calm and non-strenuous, and during the last three weeks of pregnancy, they should be separated from other dogs and animals. </p>
                        </div>
                        <div className='Health'>
                            <p className='Health-title'>Can I wash my dog with soap?</p>
                            <p className='Health-content'>When it comes to washing your dog, it's important to use a shampoo specifically formulated for canines, as human shampoo can be too harsh and disrupt the pH balance of a dog's skin. Dish soap should never be used, as it can strip the natural oils from a dog's skin and cause irritation. Baby shampoo can be used for hairless or short-coated breeds, but for dogs with itchy skin, a medicated shampoo is recommended. It's always best to consult with a breeder, veterinarian, or groomer when selecting a shampoo for your furry friend. Remember to use only a small amount of shampoo mixed with water, and dispose of any leftovers to prevent bacterial growth. </p>
                        </div>
                        <div className='Health'>
                            <p className='Health-title'>Deworming dogs : what you need to know</p>
                            <p className='Health-content'>Dogs are prone to internal parasites such as worms, which can cause gastrointestinal problems if left untreated. Puppies can be born with worms, which can be transferred through nursing or blood in utero. Parasites are found in areas where dogs are often found, such as grass, and can also be found in other animals' feces. Long worms such as roundworms, hookworms, and whipworms can cause vomiting, diarrhea, abdominal pain, lethargy, and weight loss, and may even lead to anemia. Tapeworms can cause an itchy rectal area and can be found in a dog's poop, while heart-worms, which reside in the heart and blood vessels, can cause heart failure, lung disease, and even death. Preventative measures such as routine deworming and testing can help eliminate current parasites and prevent future ones. </p>
                        </div>
                    </div>
                    <div class="content-dis">
                        <div className='Train'>
                            <p className='Train-title'>General Training Principles</p>
                            <p className='Train-content'>1. Manage your expectations and mood. Be patient and calm with your dog.
                                <br></br>2. Keep your dog’s temperament in mind and adjust your training techniques accordingly.
                                <br></br>3. Give immediate rewards within 2 seconds of a desired behavior to reinforce that behavior.
                                <br></br>4. Consider clicker training to create a positive association between the click sound and rewards. </p>
                                <p className='viewMore'>...View more</p>
                        </div>
                        <div className='Train'>
                            <p className='Train-title'>Teaching the ‘Heel’</p>
                            <p className='Train-content'>1. Regular walks are important for your dog's physical and mental health.
                                <br></br>2. Discourage pulling by stopping and waiting for your dog to come to your side.
                                <br></br>3. Change directions and encourage your dog to follow to reinforce good behavior.
                                <br></br>4. Make it enjoyable for your dog to walk by your side by using an enthusiastic voice and offering praise.
                                <br></br>5. Once your dog consistently walks by your side, give the behavior a name like "heel" or "let's go." </p>
                                {/* <p className='viewMore'>...View more</p> */}
                        </div>
                        <div className='Train'>
                            <p className='Train-title'>Teaching the ‘Come’</p>
                            <p className='Train-content'>1. Understand the value of the command as it can prevent your dog from running off if he gets loose.
                            <br></br>2. Start training indoors or in your fenced yard with low distraction.
                            <br></br>3. Attract your dog's attention by using high-pitched noises, a toy, or an excited clap.
                            <br></br>4. Give immediate praise, clicker sound, and treats when your dog reaches your side.</p>
                                <p className='viewMore'>...View more</p>
                    </div>
                    <div className='Train'>
                            <p className='Train-title'>Teaching the ‘Listen’</p>
                            <p className='Train-content'>1. Understand the purpose of the "listen" command.
                            <br></br>2. Prepare a handful of treats.
                            <br></br>3. Stand near your dog and say "Listen" in a quiet but firm voice.
                            <br></br>4. Don't raise your voice to get his attention.</p>
                                <p className='viewMore'>...View more</p>
                    </div>
                    <div className='Train'>
                            <p className='Train-title'>Teaching the ‘Sit’</p>
                            <p className='Train-content'>1. Get your dog into a standing position.
                            <br></br>2. Position yourself in his line of sight and let him see that you have a treat in your hand.
                            <br></br>3. Focus the dog's attention on the treat and raise your hand above his head to encourage him to sit.
                            <br></br>4. Give him an immediate treat and praise when he sits.</p>
                                <p className='viewMore'>...View more</p>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    )
}
export default Community;