# EcoHarmonyPark_Project_G4
Repositorio dedicado a gestionar el ciclo de vida del producto de software para el bioparque "EcoHarmony Park".

## Integrantes del equipo
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

## Instalación
```bash
git clone https://github.com/nicoranalli/EcoHarmonyPark_Project_G4.git
cd EcoHarmonyPark_Project_G4

*Siempre hacer pull o clonar el repositorio en una nueva carpeta*

------> COMO PULLEAR UNA RAMA:
git pull origin NombreRamaRemota NombreRamaLocal  --Pullea la rama remota en una rama local
git checkout NombreRamaLocal --Me traslado a la rama local recien pulleada
```
## Criterio Linea Base
Como equipo de desarrollo hemos decidido definir como *Linea Base* al momento en el cual se ha realizado la entrega y corrección del TP-6: REQUERIMIENTOS ÁGILES - Implementación de User Stories. Esto se debe a que será el punto en el cual contaremos con los *Items de Configuración* necesarios para mantener la trazabilidad e integridad del producto de software que estamos construyendo para el bioparque "EcoHarmony Park".
Las lineas bases se identificaran con una Tag que indicará que dicha rama representará una *Configuración* estable.

## Items De Configuracion
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

## Glosario
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

### Reglas de nombrado
En reglas generales, siempre se usará PascalCase para nombrar a las carpetas y a los items de configuración. Además, siemrpe que se pueda, usaremos palabras en Español. De manera particular se exigirá la cumplimentación de las siguientes reglas:
#### Commits
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

#### Branches
Para las ramas, debido a que vamos a trabajar en base a una o varias US y TPs, hemos decidido seguir la siguiente nomenclatura: "USX_TPX".
Donde *USX* se refiere a la User Story sobre la que estamos trabajando y *TPX* hace referencia al Trabajo practico sobre el que se desarrolla dicha actividad.

## Estructura del repositorio
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
    |   |   ├── Cronograma.txt
    |   |   └── PokerPlanningCards.pdf
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
    |   └── 2_MonitoreoYControl/
    |       ├── MinutasReuniones/
    |       └── Reportes/
    |
    ├── Equipo_<DDMMYYYY>.pdf
    └── README.md
```
*Explicar estructura*
