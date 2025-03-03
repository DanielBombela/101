import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { gsap } from 'gsap';

interface Reason {
  id: number | string;
  text: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="app-container">
     <h1 class="romantic-title ">Hay como un millón de razones por las que no debemos estar juntos. un millón de no. Pero también existe un sí.</h1>
      
      <!-- Video Section
        <div class="video-container">
        <video #videoPlayer controls [src]="videoUrl" 
               (loadedmetadata)="onVideoLoad()"
               class="w-full">
        </video>
      </div>
      
      -->
     

      <!-- 
           <div class="form-container">
        <textarea
          [(ngModel)]="newReason"
          placeholder="Escribe una nueva razón..."
          class="reason-input"
          rows="3"
        ></textarea>
        <button
          (click)="addReason()"
          [disabled]="reasons.length >= 101"
          class="add-button"
        >
          Añadir Razón
        </button>
      </div>

      -->
 
      <!-- Reasons List -->
      <div class="d-flex justify-content-center align-items-center">
        <div *ngFor="let reason of reasons" class="reason-card" (mouseenter)="createHeart($event)">
          <p class="reason-text">{{ reason.id }}. {{ reason.text }}</p>
        </div>
      </div>
      
   
    </div>
<!-- 
        <p style="font-weight: bold;  text-align: center;  ">Atte: Daniel Bombela</p>
-->
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #fff5f5 0%, #fff 100%);
      padding: 1rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .form-container {
      margin: 1.5rem auto;
      max-width: 600px;
      padding: 0 1rem;
    }

    .reason-input {
      width: 100%;
      padding: 1rem;
      border: 2px solid var(--primary-color);
      border-radius: 12px;
      font-size: 1rem;
      resize: vertical;
      margin-bottom: 1rem;
      font-family: 'Roboto', sans-serif;
      transition: border-color 0.3s ease;
    }

    .reason-input:focus {
      outline: none;
      border-color: var(--secondary-color);
      box-shadow: 0 0 0 3px rgba(78, 205, 196, 0.2);
    }

    .add-button {
      width: 100%;
      padding: 1rem;
      background-color: var(--primary-color);
      color: white;
      border: none;
      border-radius: 12px;
      font-size: 1.1rem;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .add-button:hover:not(:disabled) {
      background-color: #ff5252;
    }

    .add-button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .reasons-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
      padding: 1rem;
    }

    .reason-text {
      font-size: 1.1rem;
      line-height: 1.5;
      color: #000
    }

    @media (max-width: 768px) {
      .app-container {
        padding: 0.5rem;
      }

      .form-container {
        padding: 0 0.5rem;
      }

      .reasons-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
        padding: 0.5rem;
      }

      .reason-text {
        font-size: 1rem;
      }
    }
  `]
})
export class App implements OnInit {
  reasons: Reason[] = [
   
  /**
   *   
   *  { id: "", text: "Hay como un millón de razones por las que no debemos estar juntos. un millón de no. Pero también existe un sí" },
   * { id: 2, text: "Porque Quiero que Dios nos bendiga juntos." },
    { id: 3, text: "Quiero conocer cada pueblito mágico de tu mano." },
    { id: 4, text: "Quiero caminar contigo por la noche en San Miguel de Allende." },
    { id: 5, text: "Quiero que seas la primer persona a la que yo le lleve serenata." },
    { id: 6, text: "Quiero crecer a tu lado." },
    { id: 7, text: "Quiero apoyarte en las buenas y en las malas." },
    { id: 8, text: "Quiero conocer París contigo." },
    { id: 9, text: "Quiero viajar por el mundo de tu mano aunque posiblemente esté viajando con mi mundo." },
    { id: 10, text: "Quiero conocer cada cafetería de León y de muchos lugares." },
    { id: 11, text: "Quiero ver diferentes amaneceres contigo desde las montañas." },
    { id: 12, text: "Quiero seguir paseando a Bingo." },
    { id: 13, text: "Quiero que sigas yendo a Pénjamo conmigo." },
    { id: 14, text: "Quiero que seas mi copiloto en mi rojito." },
    { id: 15, text: "Quiero tener citas donde solo hablemos de la vida mientras tomamos un vinito." },
    { id: 16, text: "Quiero volver a cocinar una pasta a tu lado." },
    { id: 17, text: 'Quiero marcarte por las mañanas y decirte "amor te adoro, ¿cómo amaneciste?"' },
    { id: 18, text: "Quiero acompañarte en tus locuras y que tú estés en las mías." },
    { id: 19, text: "Quiero emprender un proyecto contigo." },
    { id: 20, text: "Quiero volver a comer esas ricas hamburguesas de tu mamá." },
    { id: 21, text: "Quiero ir a tacos Los Panchos contigo." },
    { id: 22, text: "Quiero irme lejos contigo." },
    { id: 23, text: "Quiero seguir yendo con Doña Amelia a comer contigo." },
    { id: 24, text: "Quiero ir por jícama con chamoy a Pénjamo mientras caminamos y te muestro mi pueblito." },
    { id: 25, text: "Quiero que sigas estando en mis navidades y yo en tus años nuevos." },
    { id: 26, text: "Quiero ver películas mientras estamos acostados todo el día." },
    { id: 27, text: "Quiero demostrarte que el amor y los hombres buenos sí existimos." },
    { id: 28, text: "Quiero ir a un viñedo contigo." },
    { id: 29, text: "Quiero salir a correr, hacer ejercicio, fortalecer nuestro físico juntos." },
    { id: 30, text: "Quiero acompañarte a tenis y apoyarte." },
    { id: 31, text: "Quiero conocer Nueva York contigo." },
    { id: 32, text: "Quiero estar en cada cumpleaños tuyo y poder bendecir tu vida." },
    { id: 33, text: "Quiero demostrarte que podemos ser mejores de lo que fuimos." },
    { id: 34, text: "Quiero que estés en mis partidos, competencias, orgullosa de mí." },
    { id: 35, text: "Quiero que bailemos en cualquier parte, cualquier canción y disfrutemos de nosotros." },
    { id: 36, text: "Porque cada vez que te miro, veo un futuro juntos." },
    { id: 37, text: "Porque tú aún me quieres y un amor tan repentino como el de nosotros no se debe dejar ir." },
    { id: 38, text: "Porque cuando estoy contigo, me siento en casa." },
    { id: 39, text: "Porque cada día contigo me enseña algo nuevo." },
    { id: 40, text: "Porque nuestros momentos de complicidad son lo mejor de mi día." },
    { id: 41, text: "Porque en nuestra relación aprendo a ser más paciente y comprensivo." },
    { id: 42, text: "Porque sé que no te necesito para nada, pero te quiero para todo." },
    { id: 43, text: "Porque nuestras aventuras juntos son las mejores historias." },
    { id: 44, text: "Porque somos tal para cual, tan sencillos y sin prejuicios." },
    { id: 45, text: "Porque quiero tomar un crucero a tu lado y disfrutar de nuestra compañía." },
    { id: 46, text: "Porque quiero hacerme viejito a tu lado y tener una vida para recordar." },
    { id: 47, text: "Porque aunque no siempre habrá días buenos, prometo estar en los malos y arreglarlos." },
    { id: 48, text: "Porque quiero ir africa de mano." },
    { id: 49, text: "Porque quiero ser yo quien sostenga tu mano." },
    { id: 50, text: 'Quiero que mi abuelita te sonría, te abrace y te diga "Amy despídete de mí."' },
    { id: 51, text: "Porque quiero seguir comiendo pollo feliz de tu lado" },
    { id: 52, text: "Porque mi amor por ti es leal y honesto." },
    { id: 53, text: "Porque el corazón no olvida lo que los ojos han visto." },
    { id: 54, text: "Porque quiero cantarte una canción con mi guitarra." },
    { id: 55, text: "Porque si es voluntad de Dios, algún día compartir hogar sería un privilegio." },
    { id: 56, text: "Porque quiero tener una y mil citas contigo." },
    { id: 57, text: "Porque quiero que seamos testigos de cuando un amor es real, todo lo puede." },
    { id: 58, text: "Porque prometo darte lealtad y amor sincero." },
    { id: 59, text: "Porque quiero ir a muchos conciertos contigo." },
    { id: 60, text: "Porque quiero descubrir lo indescubrible a tu lado." },
    { id: 61, text: "Porque quiero dedicar una y más canciones." },
    { id: 62, text: "Porque quiero llenarte de rosas en días especiales y no especiales." },
    { id: 63, text: "Porque quiero que seas parte de mi familia." },
    { id: 64, text: "Porque quiero que me hagas huevitos cuando tenga hambre." },
    { id: 65, text: "Quiero que llevemos una dieta juntos." },
    { id: 66, text: "Porque quiero acercarme y conocer más a Dios de tu mano." },
    { id: 67, text: "Porque quiero que seas y sigas siendo mi QA favorita." },
    { id: 68, text: "Porque tenemos unas luchitas pendientes." },
    { id: 69, text: "Porque quiero que seas tú quien tenga mi mejor versión." },
    { id: 70, text: "Porque quiero ir al mar de tu mano mientras las olas nos sacuden." },
    { id: 71, text: "Porque quiero seguir viendo esos ojitos color miel (jaja broma)." },
    { id: 72, text: "Porque quiero cuidarte en la salud y en la enfermedad (te seguiré llevando con Isra)." },
    { id: 73, text: "Porque quiero que sigas poniéndome nervioso cada vez que sostengo tu mano." },
    { id: 74, text: "Porque quiero que tú seas la tercera mujer dentro de mis tres mujeres más valiosas (espero entiendas la referencia)." },
    { id: 75, text: "Porque quiero hacer el amor solo contigo." },
    { "id": 76, "text": "Porque ya no quiero que el alcohol estropee lo bonito que tenemos." },
    { "id": 77, "text": "Porque quiero que sigamos echando chismecito de todo juntos." },
    { "id": 78, "text": "Porque quiero ser tu ternurin toda la vida." },
    { "id": 79, "text": "Porque quiero decirte 'ummm, no me quiso mucho hoy' 'ummm queee'." },
    { "id": 80, "text": "Porque quiero intentar todo contigo hasta que ya no tenga aliento." },
    { "id": 81, "text": "Porque he aprendido que los hechos valen más que mis palabras y quiero demostrártelo." },
    { "id": 82, "text": "Porque quiero que sigan teniendo celos de ti y de lo mucho que te quiero." },
    { "id": 83, "text": "Porque quiero darte esa libertad y confianza de que no siempre podemos estar juntos y que habrá planes solo tuyos o solo míos." },
    { "id": 84, "text": "Porque quiero ayudar a sanar todos tus miedos y que juntos seamos tan valientes." },
    { "id": 85, "text": "Quiero ser parte de instruirte a manejar un carro y qué mejor que el rojito." },
    { "id": 86, "text": "Quiero ir al boliche contigo." },
    { "id": 87, "text": "Quiero que me muestres y conocer tus lugares favoritos." },
    { "id": 88, "text": "Quiero seguir yendo al mirador, comernos unos tacos mientras hablamos de la vida." },
    { "id": 89, "text": "Quiero apoyarte en tu universidad y verte titulada, toda una ingeniera." },
    { "id": 90, "text": "Quiero volver a ir a la Sociedad de las Sombras." },
    { "id": 91, "text": "Porque quiero ir a recogerte a cada aeropuerto mientras muero de ansias por abrazarte." },
    { "id": 92, "text": "Porque quiero una foto contigo en el Callejón del Beso." },
    { "id": 93, "text": "Porque tu visión del mundo es una que quiero explorar." },
    { "id": 94, "text": "Porque quiero seguir bañándome en tu casa o contigo." },
    { "id": 95, "text": "Porque a tu lado, no tengo miedo de ser vulnerable." },
    { "id": 96, "text": "Porque quiero que Bingo llegue a tener un compañero." },
    { "id": 97, "text": "Porque quiero seguir teniendo conversaciones contigo en ese arbolito de BanBajío que siempre será especial." },
    { "id": 98, "text": "Porque quiero ser más sano, más fuerte y más valiente a tu lado." },
    { "id": 99, "text": "Quiero quedarme contigo mucho tiempo y tener una relación con propósito y crecimiento." },
    { "id": 100, "text": "Porque la vida me regaló un instante a tu lado, pero mi corazón decidió que ese instante fuera eterno." },
    { "id": 101, "text": "Porque cuando te conocí, sentí que debía quedarme contigo siempre." },
   */
   
  ];
  newReason: string = '';
  videoUrl: string = '';

  ngOnInit() {
    gsap.from('.romantic-title', {
      duration: 1.5,
      y: -50,
      opacity: 0,
      ease: 'back.out'
    });
  }

  addReason() {
    if (this.newReason.trim() && this.reasons.length < 101) {
      this.reasons.push({
        id: this.reasons.length + 1,
        text: this.newReason.trim()
      });
      
      gsap.from('.reason-card:last-child', {
        duration: 0.5,
        scale: 0.5,
        opacity: 0,
        ease: 'back.out'
      });
      
      this.newReason = '';
    }
  }

  createHeart(event: MouseEvent) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.className = 'heart-animation';
    heart.style.left = `${event.clientX}px`;
    heart.style.top = `${event.clientY}px`;
    document.body.appendChild(heart);

    gsap.to(heart, {
      duration: 1,
      y: -100,
      opacity: 0,
      onComplete: () => heart.remove()
    });
  }

  onVideoLoad() {
    gsap.from('.video-container', {
      duration: 1,
      scale: 0.8,
      opacity: 0,
      ease: 'power2.out'
    });
  }
}

bootstrapApplication(App);