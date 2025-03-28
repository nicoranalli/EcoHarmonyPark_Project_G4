# 🏞️EcoHarmonyPark_Project_G4🌳
Repositorio dedicado a gestionar el ciclo de vida del producto de software para el bioparque "EcoHarmony Park".

## 🔆Integrantes del equipo🔆
| Integrante                     | Legajo |
|--------------------------------|--------|
| Barbera, Juan Salvador         | 86657  |
| Cornejo, Francisco             | 90297  |
| Romero Plaza, Mateo            | 83009  |
| Maldonado, Mateo               | 98717  |
| Ranalli, Nicolás               | 85291  |
| Sciarra, Matias                | 95034  |
| Gomez, Luciano                 | 89058  |
| Sosa, Diego                    | 82397  |

## 🔆Instalación🔆
```bash
git clone https://github.com/nicoranalli/EcoHarmonyPark_Project_G4.git
cd EcoHarmonyPark_Project_G4

*Siempre hacer pull o clonar el repositorio en una nueva carpeta*

------> COMO PULLEAR UNA RAMA:
git pull origin NombreRamaRemota NombreRamaLocal  --Pullea la rama remota en una rama local
git checkout NombreRamaLocal --Me traslado a la rama local recien pulleada
```
## 🔆Criterio Linea Base🔆
Como equipo de desarrollo hemos decidido definir como *Linea Base* al momento en el cual se ha realizado la entrega y corrección del TP-6: REQUERIMIENTOS ÁGILES - Implementación de User Stories. Esto se debe a que será el punto en el cual contaremos con los *Items de Configuración* necesarios para mantener la trazabilidad e integridad del producto de software que estamos construyendo para el bioparque "EcoHarmony Park".
Las lineas bases se identificaran con una Tag que indicará que dicha rama representará una *Configuración* estable.

## 🔆Items De Configuracion🔆
| Listado de Items de Configuración    | Regla de Nombrado                                                                           | Ubicación Física                                                                                                                           |
|--------------------------------------|---------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| User Story                    | S&lt;X&gt;_US_&lt;X&gt;_&lt;TEMA&gt;.PDF                          | https://github.com/nicoranalli/EcoHarmonyPark_Project_G4.git/Producto/1-Requerimientos/Documentacion                                                         |
| Template Caso Prueba                        | EHP_TMP_CP_V&lt;X&gt;.xlsx                                                                              | https://github.com/nicoranalli/EcoHarmonyPark_Project_G4.git/Producto/5-Prueba/Documentacion                                              |
| Reporte Caso Prueba                  | EHP_REP_CP_V&lt;X&gt;.xlsx                                                                    | https://github.com/nicoranalli/EcoHarmonyPark_Project_G4.git/Producto/5-Prueba/Documentacion                                                      |
| Sprint Planning                            | S&lt;X&gt;_PLAN_&lt;DDMMMYYYY&gt;.pdf                         | https://github.com/nicoranalli/EcoHarmonyPark_Project_G4.git/Proyecto/Planificacion/Sprint/SprintX                                                        |
| Sprint Retro                 | S&lt;X&gt;_RETRO_&lt;DDMMMYYYY&gt;.pdf                                                                          | https://github.com/nicoranalli/EcoHarmonyPark_Project_G4.git/Proyecto/Planificacion/Sprint/Sprint_X                                                            |
| Sprint Report                 | S&lt;X&gt;_REP_&lt;DDMMMYYYY&gt;.pdf                                                                     | https://github.com/nicoranalli/EcoHarmonyPark_Project_G4.git/Proyecto/Planificacion/Sprint/SprintX                                                            |
| Release Planning                  | R&lt;X&gt;_PLAN_&lt;DDMMMYYYY&gt;.pdf                                                                        | https://github.com/nicoranalli/EcoHarmonyPark_Project_G4.git/Proyecto/Planificacion/Release/ReleaseX                                                                    |
| Minuta                            | MIN_TEMA_&lt;DDMMMYYYY&gt;.pdf                                                          | https://github.com/nicoranalli/EcoHarmonyPark_Project_G4.git/Proyecto/MonitoreoYControl/MinutasReuniones                                                                        |
| Reporte      | REP_VP&lt;X&gt;_TEMA_&lt;DDMMMYYYY&gt;.pdf                             |  https://github.com/nicoranalli/EcoHarmonyPark_Project_G4.git/Proyecto/MonitoreoYControl/Reportes                                     |
| Estructura Equipo | Equipo_&lt;DDMMMYYYY&gt;.pdf                                        | https://github.com/nicoranalli/EcoHarmonyPark_Project_G4.git/Proyecto            |
| Codigo | Tipo_Entidad.ext                                        | https://github.com/nicoranalli/EcoHarmonyPark_Project_G4.git/Producto/4-Implementacion/Codigo            |

## 🔆Glosario🔆
| Sigla                                      | Significado                                                                                                                                                                                          |
|--------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| &lt;DDMMMYYYY&gt;                          | Fecha en formato día-mes-año en valores numéricos                                                                                                                                                    |
| &lt;X&gt;                                  | Place holder para indicar un número - adquiere significado cuando se le coloca un prefijo (S - sprint, R - release, etc)                                                                             |
| &lt;Tema&gt;                               | Tema sobre lo que se trata el Item de Configuración en específico - Para el desarrollo de al asignatura se propuso que tema siga el siguiente formato: TPX_"tema"                                    |
| S                                          | Sprint al que pertenece dicho item de configuración                                                                                                                                                  |
| R                                          | Release al que pertenece dicho item de configuración                                                                                                                                                 |
| US                                         | Indica que dicho item de configuración es una User Story                                                                                                                                             |
| TMP                                        | Indica que dicho item de configuración es un Template o Plantilla                                                                                                                                    |
| CP                                         | Siglas para Caso de Prueba                                                                                                                                                                           |
| REP                                        | Indica que dicho item de configuración es un Reporte                                                                                                                                                 |
| EHP                                        | Siglas para el nombre del proyecto: EcoHarmony Park                                                                                                                                                  |
| V                                          | Sigla para Versión                                                                                                                                                                                   |
| PLAN                                       | Indica que dicho item de configuración corresponde a una Planificación                                                                                                                               |
| RETRO                                      | Indica que dicho item de configuración corresponde a una Retro                                                                                                                                       |
| MIN                                        | Indica que dicho item de configuración corresponde a una Minuta de Reunion                                                                                                                           |
| VP                                         | Sigla para Versión de Producto                                                                                                                                                                       |
| Tipo                                       | En el Código, indica de que se trata dicho archivo: Si se trata de una pantalla, un componente, un servicio, etc.                                                                                    |
| Entidad                                    | En el Código, indica de que entidad se trata dicha pieza de código - Entiendase por entidad al ámbito, área o parte del dominio sobre el cual se está trabajando                                     |
| .ext                                       | Indica el tipo de archivo - pdf, xlsx, js, ts, etc                                                                                                                                                   |

### ®️Reglas de nombrado
En reglas generales, siempre se usará PascalCase para nombrar a las carpetas y a los items de configuración. Además, siemrpe que se pueda, usaremos palabras en Español. De manera particular se exigirá la cumplimentación de las siguientes reglas:
#### ⬆️Commits
Para los commits hemos decidido utilizar la siguiente nomenclatura: "Prefijo1/DescripciónAcción1_Prefijo2/DescripciónAcción2_..._PrefijoN/DescripciónAcciónN"
- El prefijo hace referencia a las siguientes posibles acciones que se pueden realizar con respecto a items de configuración
  - Add: Agregar un nuevo item de configuración.
  - Bugfix: Corregir un error descubierto dentro de un item de configuración que contenga código.
  - Fix: Correción de errores de cualquier tipo dentro de un item de configuración.
  - Change: Cambio parcial de un item de configuración ya creado debido a modificaciones de criterio, requerimientos o correcciones.
  - Feature: Agregar una nueva funcionaliad dentro de un item de configuración que contenga código.
  - Remove: Eliminación completa de algún item de configuración si el mismo se encontraba mal planteado.
  - Update: Actualización de un item de configuración ya creado, expandiendo su contenido sin necesariamente haber modificado lo previo.
  - Entre otras acciones. *Cualquier propuesta agregar aquí!*
- La descripción hará referencia a los items de configuración afectados y a lo que haya sido realizado correspondientemente con el prefijo utilizado
La idea de esta nomenclatura es tener commits limpios y legibles, en los cuales rapidamente se pueda saber que se hizo sin necesidad de tener que adentrarse en los cambios.
La forma de utilizar la regla de nombrado sería: Por ejemplo en un commit hicimos dos acciones *"Add"* y *"Fix"* sobre un mismo o varios items de configuración, el nombre del commit sería: *"Add/Pantalla tramites_Fix/Error de tipeo en la US1"*

#### 🌿Branches
Para las ramas, debido a que vamos a trabajar en base a una o varias US y TPs, hemos decidido seguir la siguiente nomenclatura: "USX_TPX".
Donde *USX* se refiere a la User Story sobre la que estamos trabajando y *TPX* hace referencia al Trabajo practico sobre el que se desarrolla dicha actividad.

## 🔆Estructura del repositorio🔆
```
└── EcoHarmonyPark_Project_G4
    ├── Producto/                                                 
    |   ├── 1_Requerimientos/
    |   |   └── Documentacion
    |   |                                                       
    |   ├── 2_Analisis/                                                  
    |   |
    |   ├── 3_Diseño/
    |   |
    |   ├── 4_Implementacion/
    |   |   ├── Codigo
    |   |   ├── Datos
    |   |   └── Documentacion
    |   |
    |   ├── 5_Prueba/
    |   |   └── Documentacion
    |   |
    |   └── 6_Despliegue/
    |	
    ├── Proyecto/
    |   ├── 1_Planificacion/
    |   |   ├── Sprints/
    |   |   |   └── SprintX/
    |   |   └── Releases/
    |   |       └── ReleaseX/
    |   |
    |   ├── 2_MonitoreoYControl/
    |   |    ├── MinutasReuniones/
    |   |    └── Reportes/
    |   |
    |   └── Equipo_<DDMMYYYY>.pdf
    |
    └── README.md
```
### 📃Descripción de la estructura
Contamos con dos grandes directorios Producto y Proyecto. Tanto en *Producto* como en *Proyecto* encontraremos toda la configuración correspondiente al desarrollo del producto que estamos construyendo para el bioparque "EcoHarmony Park", solo que en la primera encontraremos items orientados al desarrollo del producto y en la segunda items orientados a la gestion misma del proyecto.
#### ⚙️Producto
Este directorio se divide en 6 carpetas, una por cada actividad en el desarrollo del producto de software que estamos llevando a cabo. Todas las carpetas comparten una carpeta con documentación asociada o generada en la etapa, pero pueden contar con otras propias de la actividad. Por ejemplo, la carpeta *4_Implementacion* cuenta con el directorio *Codigo* Donde encontraremos toda la estructura del codigo fuente sobre el que se construye el producto, o también la carpeta *Datos* que contendrá los mockups, o bases de datos locales para pruebas.

#### 💡Proyecto
Este directorio consta de 2 carpetas y un documento. En la carpeta *1_Planificación* encontraremos todos los items de configuración referidos a las tareas de gestion de los sprints y releases. Esta se encuentra sujeta a cambios debido a que todavía no tenemos bien definido el marco de trabajo a seguir.
Luego, en la carpeta *2_MonitoreoYControl* encontraremos toda la configuración necesaria para gestionar los reportes, estadisticas y reclamos de la aplicación que estamos construyendo.
Finalmente, contamos con un documento *Equipo_<DDMMYYYY>.pdf*, en el cual encontraremos información sobre el equipo de trabajo a lo largo del desarrollo del proyecto. La idea es que funcione como un historico sobre como se fue organizando el equipo a medida que fue trabajando a lo largo del proyecto. Por ejemplo, que roles ocupó cada integrante, cuales fueron sus tareas, sus desafíos y aprendizajes, entre otros factores.
  
  

