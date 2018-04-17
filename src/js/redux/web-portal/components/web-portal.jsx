import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {WebNav} from './web-nav';
import {WebHeader} from './web-header';
import {WebSectionHome} from './web-section-home';
import {WebSectionContact} from './web-section-contact';
import {WebSectionCourse} from './web-section-course';
import {WebSectionPhilosophy} from './web-section-philosophy';
import {WebSectionService} from './web-section-service';
import {WebFooter} from './web-footer'

const courses = [
    {
        id:1,
        name: 'Sistema Integral de Administración Financiera',
        initial: 'S.I.A.F.',
        logo:{
            src:require(`./../../../../media/images/png/SIAF-1.png`),
            alt: 'S.I.A.F.'
        },
        modules: [
            {
                id:1,
                name:'Módulo Administrativo',
                url:'/cursos/modulo-administrativo',
                themes: [
                    {
                        id:1,
                        theme: 'Tema 1'
                    },
                    {
                        id:2,
                        theme: 'Tema 2'
                    },{
                        id:3,
                        theme: 'Tema 3'
                    },{
                        id:4,
                        theme: 'Tema 4'
                    },{
                        id:5,
                        theme: 'Tema 5'
                    },
                ]
            },
            {
                id:2,
                name:'Módulo Presupuestal',
                url:'/cursos/modulo-presupuestal',
                themes: [
                    {
                        id:1,
                        theme: 'Tema 1'
                    },
                    {
                        id:2,
                        theme: 'Tema 2'
                    },{
                        id:3,
                        theme: 'Tema 3'
                    },{
                        id:4,
                        theme: 'Tema 4'
                    },{
                        id:5,
                        theme: 'Tema 5'
                    },
                ]
            },
            {
                id:3,
                name:'Módulo Contable',
                url:'/cursos/modulo-contable',
                themes: [
                    {
                        id:1,
                        theme: 'Tema 1'
                    },
                    {
                        id:2,
                        theme: 'Tema 2'
                    },{
                        id:3,
                        theme: 'Tema 3'
                    },{
                        id:4,
                        theme: 'Tema 4'
                    },{
                        id:5,
                        theme: 'Tema 5'
                    },
                ]
            },
            {
                id:4,
                name:'Módulo Tesorería',
                url:'/cursos/modulo-tesoreria',
                themes: [
                    {
                        id:1,
                        theme: 'Tema 1'
                    },
                    {
                        id:2,
                        theme: 'Tema 2'
                    },{
                        id:3,
                        theme: 'Tema 3'
                    },{
                        id:4,
                        theme: 'Tema 4'
                    },{
                        id:5,
                        theme: 'Tema 5'
                    },
                ]
            },
            {
                id:5,
                name:'Módulo Control de Planilla',
                url:'/cursos/modulo-control-planilla',
                themes: [
                    {
                        id:1,
                        theme: 'Tema 1'
                    },
                    {
                        id:2,
                        theme: 'Tema 2'
                    },{
                        id:3,
                        theme: 'Tema 3'
                    },{
                        id:4,
                        theme: 'Tema 4'
                    },{
                        id:5,
                        theme: 'Tema 5'
                    },
                ]
            }
        ]
    },
    {
        id:2,
        name: 'Sistema Integrado de Gestión Administrativa',
        initial: 'S.I.G.A.',
        logo:{
            src:require(`./../../../../media/images/png/SIGA-1.png`),
            alt: 'S.I.A.F.'
        },
        modules: [
            {
                id:1,
                name:'Módulo Logística',
                url:'/cursos/modulo-logistica',
                themes: [
                    {
                        id:1,
                        theme: 'Tema 1'
                    },
                    {
                        id:2,
                        theme: 'Tema 2'
                    },{
                        id:3,
                        theme: 'Tema 3'
                    },{
                        id:4,
                        theme: 'Tema 4'
                    },{
                        id:5,
                        theme: 'Tema 5'
                    },
                ]
            },
            {
                id:2,
                name:'Módulo Patrimonio',
                url:'/cursos/modulo-patrimonio',
                themes: [
                    {
                        id:1,
                        theme: 'Tema 1'
                    },
                    {
                        id:2,
                        theme: 'Tema 2'
                    },{
                        id:3,
                        theme: 'Tema 3'
                    },{
                        id:4,
                        theme: 'Tema 4'
                    },{
                        id:5,
                        theme: 'Tema 5'
                    },
                ]
            },
            {
                id:3,
                name:'Módulo Presupuesto por Resultados',
                url:'/cursos/modulo-presupuesto-resultados',
                themes: [
                    {
                        id:1,
                        theme: 'Tema 1'
                    },
                    {
                        id:2,
                        theme: 'Tema 2'
                    },{
                        id:3,
                        theme: 'Tema 3'
                    },{
                        id:4,
                        theme: 'Tema 4'
                    },{
                        id:5,
                        theme: 'Tema 5'
                    },
                ]
            },
            {
                id:4,
                name:'Módulo Bienes Corrientes',
                url:'/cursos/modulo-bienes-corrientes',
                themes: [
                    {
                        id:1,
                        theme: 'Tema 1'
                    },
                    {
                        id:2,
                        theme: 'Tema 2'
                    },{
                        id:3,
                        theme: 'Tema 3'
                    },{
                        id:4,
                        theme: 'Tema 4'
                    },{
                        id:5,
                        theme: 'Tema 5'
                    },
                ]
            }
        ]
    },
    {
        id:3,
        name: 'Sistema Electrónico de Contrataciones del Estado',
        initial: 'S.E.A.C.E.',
        logo:{
            src:require(`./../../../../media/images/png/SEACE-1.png`),
            alt: 'S.E.A.C.E.'
        },
        modules: [
            {
                id:1,
                name:'Módulo Logística',
                url:'/cursos/modulo-logistica',
                themes: [
                    {
                        id:1,
                        theme: 'Tema 1'
                    },
                    {
                        id:2,
                        theme: 'Tema 2'
                    },{
                        id:3,
                        theme: 'Tema 3'
                    },{
                        id:4,
                        theme: 'Tema 4'
                    },{
                        id:5,
                        theme: 'Tema 5'
                    },
                ]
            },
            {
                id:2,
                name:'Módulo Patrimonio',
                url:'/cursos/modulo-patrimonio',
                themes: [
                    {
                        id:1,
                        theme: 'Tema 1'
                    },
                    {
                        id:2,
                        theme: 'Tema 2'
                    },{
                        id:3,
                        theme: 'Tema 3'
                    },{
                        id:4,
                        theme: 'Tema 4'
                    },{
                        id:5,
                        theme: 'Tema 5'
                    },
                ]
            },
            {
                id:3,
                name:'Módulo Presupuesto por Resultados',
                url:'/cursos/modulo-presupuesto-resultados',
                themes: [
                    {
                        id:1,
                        theme: 'Tema 1'
                    },
                    {
                        id:2,
                        theme: 'Tema 2'
                    },{
                        id:3,
                        theme: 'Tema 3'
                    },{
                        id:4,
                        theme: 'Tema 4'
                    },{
                        id:5,
                        theme: 'Tema 5'
                    },
                ]
            },
            {
                id:4,
                name:'Módulo Bienes Corrientes',
                url:'/cursos/modulo-bienes-corrientes',
                
            }
        ]
    }
];

const sliders = [
    {
        id:1,
        img:{
            src:'http://www.firstcallcss.com/wp-content/uploads/2017/04/banner.png',
            alt:'Asesoramiento y Capacitación'
        },
        caption:'Asesoramiento y Capacitación',
        slogan:'Gestión Pública, Gobierno Locales, Regionales y Empresas Públicas.'
    },
    {
        id:2,
        img:{
            src:'https://images5.alphacoders.com/546/546186.jpg',
            alt:'Diagnostico de Gestión'
        },
        caption:'Diagnostico de Gestión',
        slogan:'Contable, Patrimonial y Saneamiento Contable.'
    },
    {
        id:3,
        img:{
            src:'https://i0.wp.com/servicities.com/blog/wp-content/uploads/2016/05/7-problemas-de-gesti%C3%B3n-empresarial-en-PYMEs.jpg?ssl=1',
            alt:'Regularización Documentaria'
        },
        caption:'Regularización Documentaria',
        slogan:'Proceso de Transferencia de la Gestión Administrativa de los Gobiernos Regionales y Locales.'
    }   
];

const rootHeader = {
    logo1 : {
        src: require(`./../../../../media/images/png/QG3.png`),
        alt: 'Nos gusta lo que hacemos.'
    },
    title: 'Quality Global',
    logo2 : {
        src:'https://www.leanpio.com/wp-content/uploads/2017/11/BigHanna-world.gif',
        alt:'Somos tu mejor opción.'
    }
}

const imagesSectionMenu = {
    left:{
        src: require(`./../../../../media/images/png/Customer-4.png`),
        alt: 'Enfocado al usuario'
    },
    center:{
        src: require(`./../../../../media/images/png/Professionals-1.png`),
        alt: 'Acelera el desarrollo'
    },
    right:{
        src: require(`./../../../../media/images/png/Customer-6.png`),
        alt: 'Fácil de trabajar'
    },
}

const servicesSectionMenu = [
    {
        id:1,
        title:'Servicio de Inventario',
        img:{
            src: require(`./../../../../media/images/jpg/Inventary-1.jpg`),
            alt: this.title
        },
        position:{
            id:1,
            left:true,
            top:false,
            bottom:false,
            right:false
        },
        description:'Los Inventarios Físicos son actividad clave para una adecuada gestión empresarial. Permiten mantener un control total sobre las existencias y los activos fijos, también ayudan a mantener al día sus registros contables, como sustento de los saldos presentados en los estados financieros y el cumplimiento tributario.', 
        services:[
            {id:1, description:'Inventarios Físicos'},
            {id:2, description:'Inventario de Activos Fijos'},
            {id:3, description:'Inventarios Asociados'},
            {id:4, description:'Outsourcing'},
            {id:5, description:'Consultoría en Gestión de Inventarios'},
            {id:6, description:'Servicio de Codificación y Etiquetado'},
            {id:7, description:'Cursos de Capacitación y otros.'}
        ],
        banner:{
            src: require(`./../../../../media/images/jpg/Inventary-2.jpg`),
            alt: 'Inventary-2'
        },
        galery:[
            {
                src: require(`./../../../../media/images/jpg/Inventary-3.jpg`),
                alt: 'Inventary-3'
            },
            {
                src: require(`./../../../../media/images/jpg/Inventary-4.jpg`),
                alt: 'Inventary-4'
            },
            {
                src: require(`./../../../../media/images/jpg/Inventary-5.jpg`),
                alt: 'Inventary-5'
            },
            {
                src: require(`./../../../../media/images/jpg/Inventary-6.jpg`),
                alt: 'Inventary-6'
            }
        ]
        
    },
    {
        id:2,
        title:'Diagnostico de Gestión Contable y Patrimonial',
        img:{
            src: require(`./../../../../media/images/jpg/Accounting-1.jpg`),
            alt: this.title
        },
        position:{
            left:false,
            top:true,
            bottom:false,
            right:false
        },
        description:'Los Gestión Contable permite llevar un registro y un control de las operaciones financieras que se llevan a cabo en la organización. Se trata de un modelo básico que es complementado con un sistema de información que ofrece compatibilidad, control y flexibilidad, acompañado con una correcta relación de coste y beneficio.', 
        services:[
            {id:1, description:''},
            {id:2, description:''},
            {id:3, description:''},
            {id:4, description:''},
            {id:5, description:''},
            {id:6, description:''},
            {id:7, description:''}
        ],
        banner:{
            src: require(`./../../../../media/images/jpg/Accounting-2.jpg`),
            alt: 'Accounting-2'
        },
        galery:[
            {
                src: require(`./../../../../media/images/jpg/Accounting-3.jpg`),
                alt: 'Accounting-3'
            },
            {
                src: require(`./../../../../media/images/jpg/Accounting-4.jpg`),
                alt: 'Accounting-4'
            },
            {
                src: require(`./../../../../media/images/jpg/Accounting-5.jpg`),
                alt: 'Accounting-5'
            },
            {
                src: require(`./../../../../media/images/jpg/Accounting-6.jpg`),
                alt: 'Accounting-6'
            }
        ]
    },
    {
        id:3,
        title:'Servicio de Liquidación en Obras Públicas',
        img:{
            src: require(`./../../../../media/images/jpg/Architect-1.jpg`),
            alt: this.title
        },
        position:{
            left:false,
            top:false,
            bottom:true,
            right:false
        },
        description:'La Liquidación de Obras Públicas elabora y liquida las valorizaciones mensuales, teniendo en cuenta los conceptos de obras adelantadas y obras atrasadas, para que en función a estos pueda determinar los reintegros reconocidos. Aplica las deducciones y/o amortizaciones debido a los adelantos: Adelanto Directo al Contratista y el Adelanto Específico para materiales.', 
        services:[
            {id:1, description:''},
            {id:2, description:''},
            {id:3, description:''},
            {id:4, description:''},
            {id:5, description:''},
            {id:6, description:''},
            {id:7, description:''}
        ],
        banner:{
            src: require(`./../../../../media/images/jpg/Architect-2.jpg`),
            alt: 'Architect-2'
        },
        galery:[
            {
                src: require(`./../../../../media/images/jpg/Architect-3.jpg`),
                alt: 'Architect-3'
            },
            {
                src: require(`./../../../../media/images/jpg/Architect-4.jpg`),
                alt: 'Architect-4'
            },
            {
                src: require(`./../../../../media/images/jpg/Architect-5.jpg`),
                alt: 'Architect-5'
            },
            {
                src: require(`./../../../../media/images/jpg/Architect-6.jpg`),
                alt: 'Architect-6'
            }
        ]
    },
    {
        id:4,
        title:'Proceso de Transferencia en Gestión Pública',
        img:{
            src: require(`./../../../../media/images/jpg/Procedure-1.jpg`),
            alt: this.title
        },
        position:{
            left:false,
            top:false,
            bottom:false,
            right:true
        },
        description:'La Transferencia de la Gestión Administrativa (Gestión Pública) es el proceso mediante el cual la Autoridad Saliente rinde cuentas a la Autoridad Electa en forma documentada, de la situación administrativa, operativa, económica-financiera, así como de los avances, los resultados, logros y asuntos urgentes de prioritaria atención.', 
        services:[
            {id:1, description:''},
            {id:2, description:''},
            {id:3, description:''},
            {id:4, description:''},
            {id:5, description:''},
            {id:6, description:''},
            {id:7, description:''}
        ],
        banner:{
            src: require(`./../../../../media/images/jpg/Procedure-2.jpg`),
            alt: 'Procedure-2'
        },
        galery:[
            {
                src: require(`./../../../../media/images/jpg/Procedure-3.jpg`),
                alt: 'Procedure-3'
            },
            {
                src: require(`./../../../../media/images/jpg/Procedure-4.jpg`),
                alt: 'Procedure-4'
            },
            {
                src: require(`./../../../../media/images/jpg/Procedure-5.jpg`),
                alt: 'Procedure-5'
            },
            {
                src: require(`./../../../../media/images/jpg/Procedure-6.jpg`),
                alt: 'Procedure-6'
            }
        ]
    },
    {
        id:5,
        title:'Elaboración de Estados Financieros',
        img:{
            src: require(`./../../../../media/images/jpg/Financial-1.jpg`),
            alt: this.title
        },
        position:{
            left:true,
            top:false,
            bottom:false,
            right:false
        },
        description:'Los Estados Financieros son informes que utilizan las entidades para dar a conocer la situación económica y financiera, los cambios que experimenta la misma a una fecha o periodo determinado. Esta información resulta útil para la Administración, gestores, reguladores y otros tipos de interesados como los accionistas, acreedores o propietarios.', 
        services:[
            {id:1, description:''},
            {id:2, description:''},
            {id:3, description:''},
            {id:4, description:''},
            {id:5, description:''},
            {id:6, description:''},
            {id:7, description:''}
        ],
        banner:{
            src: require(`./../../../../media/images/jpg/Financial-2.jpg`),
            alt: 'Financial-2'
        },
        galery:[
                {
                    src: require(`./../../../../media/images/jpg/Financial-3.jpg`),
                    alt: 'Financial-3'
                },
                {
                    src: require(`./../../../../media/images/jpg/Financial-4.jpg`),
                    alt: 'Financial-4'
                },
                {
                    src: require(`./../../../../media/images/jpg/Financial-5.jpg`),
                    alt: 'Financial-5'
                },
                {
                    src: require(`./../../../../media/images/jpg/Financial-6.jpg`),
                    alt: 'Financial-6'
                }
        ]
    },
    {
        id:6,
        title:'Conciliaciones Bancarias',
        img:{
            src: require(`./../../../../media/images/jpg/Banking-1.jpg`),
            alt: this.title
        },
        position:{
            left:false,
            top:true,
            bottom:false,
            right:false
        },
        description:'La Conciliación de Cuenta Bancaria o Conciliación Bancaria es un proceso que permite confrontar y conciliar los valores económicos que una empresa tiene registrados sobre una cuenta, ya sea corriente o de ahorro, con sus movimientos bancarios, así como clasificar el libro auxiliar de contabilidad para confrontarlo con el extracto. La conciliación bancaria no busca en ningún momento legalizar los errores, ya que es una mecánica que permite identificar las diferencias y sus causas para luego proceder a realizar los respectivos ajustes y conexiones, por lo que para realizarla se emiten documentos claros y muy precisos para uso del ente económico y así llevar en claro un equilibrio del estado de cuenta de dicha entidad.', 
        services:[
            {id:1, description:''},
            {id:2, description:''},
            {id:3, description:''},
            {id:4, description:''},
            {id:5, description:''},
            {id:6, description:''},
            {id:7, description:''}
        ],
        banner:{
            src: require(`./../../../../media/images/jpg/Banking-2.jpg`),
            alt: 'Inventary-2'
        },
        galery:[
            {
                src: require(`./../../../../media/images/jpg/Banking-3.jpg`),
                alt: 'Inventary-3'
            },
            {
                src: require(`./../../../../media/images/jpg/Banking-4.jpg`),
                alt: 'Inventary-4'
            },
            {
                src: require(`./../../../../media/images/jpg/Banking-5.jpg`),
                alt: 'Inventary-5'
            },
            {
                src: require(`./../../../../media/images/jpg/Banking-6.jpg`),
                alt: 'Inventary-6'
            }
        ]
    },
    {
        id:7,
        title:'Entrenamiento y Capacitación Personalizada',
        img:{
            src: require(`./../../../../media/images/jpg/Capacitation-1.jpg`),
            alt: this.title
        },
        position:{
            left:false,
            top:false,
            bottom:true,
            right:false
        },
        description:'El Entrenamiento y Capacitación Personalizada se presenta como una de las mejores inversiones realizadas por las organizaciones y, a su vez, como una importante fuente de bienestar y beneficio tanto para el personal como para lograr altos niveles productivos y, de este modo, alcanzar la rentabilidad a la que toda empresa aspira.', 
        services:[
            {id:1, description:''},
            {id:2, description:''},
            {id:3, description:''},
            {id:4, description:''},
            {id:5, description:''},
            {id:6, description:''},
            {id:7, description:''}
        ],
        banner:{
            src: require(`./../../../../media/images/jpg/Capacitation-2.jpg`),
            alt: 'Capacitation-2'
        },
        galery:[
            {
                src: require(`./../../../../media/images/jpg/Capacitation-3.jpg`),
                alt: 'Capacitation-3'
            },
            {
                src: require(`./../../../../media/images/jpg/Capacitation-4.jpg`),
                alt: 'Capacitation-4'
            },
            {
                src: require(`./../../../../media/images/jpg/Capacitation-5.jpg`),
                alt: 'Capacitation-5'
            },
            {
                src: require(`./../../../../media/images/jpg/Capacitation-6.jpg`),
                alt: 'Capacitation-6'
            }
        ]
    },
    {
        id:8,
        title:'Asesoramiento y Capacitación en Gestión Pública',
        img:{
            src: require(`./../../../../media/images/jpg/Management-1.jpg`),
            alt: this.title
        },
        position:{
            left:false,
            top:false,
            bottom:false,
            right:true
        },
        description:'La Gestión Pública es un sistema de límites imprecisos que comprende el conjunto de organizaciones públicas que realizan la función administrativa y de gestión del Estado​ y de otros entes públicos con personalidad jurídica, ya sean de ámbito regional o local.', 
        services:[
            {id:1, description:''},
            {id:2, description:''},
            {id:3, description:''},
            {id:4, description:''},
            {id:5, description:''},
            {id:6, description:''},
            {id:7, description:''}
        ],
        banner:{
            src: require(`./../../../../media/images/jpg/Management-2.jpg`),
            alt: 'Management-2'
        },
        galery:[
            {
                src: require(`./../../../../media/images/jpg/Management-3.jpg`),
                alt: 'Management-3'
            },
            {
                src: require(`./../../../../media/images/jpg/Management-4.jpg`),
                alt: 'Management-4'
            },
            {
                src: require(`./../../../../media/images/jpg/Management-5.jpg`),
                alt: 'Management-5'
            },
            {
                src: require(`./../../../../media/images/jpg/Management-6.jpg`),
                alt: 'Management-6'
            }
        ]
    },
    {
        id:9,
        title:'Asesoría y Capacitación Profesional (SIAF, SEACE, etc.)',
        img:{
            src: require(`./../../../../media/images/jpg/Computer-Lab-1.jpg`),
            alt: this.title
        },
        position:{
            left:true,
            top:false,
            bottom:false,
            right:false
        },
        description:'Los Sistemas de Gestión Integral para el Gobierno son Sistemas Informáticos que permiten registrar, controlar, presupuestar, integrar procesos diarios de ingresos y egresos de un ente gubernamental en un mismo ambiente, permitiendo obtener un control contable y seguimiento de la misma.', 
        services:[
            {id:1, description:''},
            {id:2, description:''},
            {id:3, description:''},
            {id:4, description:''},
            {id:5, description:''},
            {id:6, description:''},
            {id:7, description:''}
        ],
        banner:{
            src: require(`./../../../../media/images/jpg/Computer-Lab-2.jpg`),
            alt: 'Computer-Lab-2'
        },
        galery:[
            {
                src: require(`./../../../../media/images/jpg/Computer-Lab-3.jpg`),
                alt: 'Computer-Lab-3'
            },
            {
                src: require(`./../../../../media/images/jpg/Computer-Lab-4.jpg`),
                alt: 'Computer-Lab-4'
            },
            {
                src: require(`./../../../../media/images/jpg/Computer-Lab-5.jpg`),
                alt: 'Computer-Lab-5'
            },
            {
                src: require(`./../../../../media/images/jpg/Computer-Lab-6.jpg`),
                alt: 'Computer-Lab-6'
            }
        ]
    },
    {
        id:10,
        title:'Cursos Virtuales en Gestión Pública',
        img:{
            src: require(`./../../../../media/images/jpg/Virtual-1.jpg`),
            alt: this.title
        },
        position:{
            left:false,
            top:true,
            bottom:false,
            right:false
        },
        description:'Los Cursos Virtuales es un espacio en donde los docentes y estudiantes participan en un entorno digital a través de las nuevas tecnologías y de las redes de computadoras, haciendo uso intensivo de las facilidades que proporciona Internet y las tecnologías digitales.', 
        services:[
            {id:1, description:''},
            {id:2, description:''},
            {id:3, description:''},
            {id:4, description:''},
            {id:5, description:''},
            {id:6, description:''},
            {id:7, description:''}
        ],
        banner:{
            src: require(`./../../../../media/images/jpg/Virtual-2.jpg`),
            alt: 'Virtual-2'
        },
        galery:[
            {
                src: require(`./../../../../media/images/jpg/Virtual-3.jpg`),
                alt: 'Virtual-3'
            },
            {
                src: require(`./../../../../media/images/jpg/Virtual-4.jpg`),
                alt: 'Virtual-4'
            },
            {
                src: require(`./../../../../media/images/jpg/Virtual-5.jpg`),
                alt: 'Virtual-5'
            },
            {
                src: require(`./../../../../media/images/jpg/Virtual-6.jpg`),
                alt: 'Virtual-6'
            }
        ]
    },
    {
        id:11,
        title:'Desarrollo de Software para Entidades Públicas',
        img:{
            src: require(`./../../../../media/images/jpg/Software-1.jpg`),
            alt: this.title
        },
        position:{
            left:false,
            top:false,
            bottom:true,
            right:false
        },
        description:'Enfocamos el Desarrollo de Software a las necesidades de cada entidad y realizamos el diseño enfocados al usuario final y así darle una mejor experiencia y facilidad, aumentando la productividad con una información centralizada, segura y en tiempo real, utilizamos las tecnologias de ultima generacion tanto en software de Escritorio, Aplicación (Android - IOS) y Web mediante óptimos Lenguajes de Programación en Back-End tales como: Python (DJango), Ruby (Rails), NodeJS (Express), Java (Spring, Hibernate, JavaServerFace), C# (EntityFramework), PHP (Laravel) y en Front-End utilizamos Javascript (EcmaScript 6) ademas de Framework y Librerías tales como: JQuery, BabkboneJS (M.V.C.), ReactJS y VueJS, ademas utilizamos los nuevos Patrones de Flujos como Redux y Vuex con una gran variedad de Gestores de Base de Datos como: SQLServer, MySQL, MariaDB, PostgreSQL y Microsoft Access, todo de acuerdo a la necedidades de cada entidad.', 
        services:[
            {id:1, description:''},
            {id:2, description:''},
            {id:3, description:''},
            {id:4, description:''},
            {id:5, description:''},
            {id:6, description:''},
            {id:7, description:''}
        ],
        banner:{
            src: require(`./../../../../media/images/jpg/Software-2.jpg`),
            alt: 'Software-2'
        },
        galery:[
            {
                src: require(`./../../../../media/images/jpg/Software-3.jpg`),
                alt: 'Software-3'
            },
            {
                src: require(`./../../../../media/images/jpg/Software-4.jpg`),
                alt: 'Software-4'
            },
            {
                src: require(`./../../../../media/images/jpg/Software-5.jpg`),
                alt: 'Software-5'
            },
            {
                src: require(`./../../../../media/images/jpg/Software-6.jpg`),
                alt: 'Software-6'
            }
        ]
    },
    {
        id:12,
        title:'Coaching en Gestión Pública',
        img:{
            src: require(`./../../../../media/images/jpg/Coaching-1.jpg`),
            alt: this.title
        },
        position:{
            left:false,
            top:false,
            bottom:false,
            right:true
        },
        description:'El Coaching es una práctica profesional crecientemente solicitada por personas, empresas e instituciones que buscan alcanzar logros significativos en su vida personal y/o profesional.', 
        services:[
            {id:1, description:''},
            {id:2, description:''},
            {id:3, description:''},
            {id:4, description:''},
            {id:5, description:''},
            {id:6, description:''},
            {id:7, description:''}
        ],
        banner:{
            src: require(`./../../../../media/images/jpg/Coaching-2.jpg`),
            alt: 'Coaching-2'
        },
        galery:[
            {
                src: require(`./../../../../media/images/jpg/Coaching-3.jpg`),
                alt: 'Coaching-3'
            },
            {
                src: require(`./../../../../media/images/jpg/Coaching-4.jpg`),
                alt: 'Coaching-4'
            },
            {
                src: require(`./../../../../media/images/jpg/Coaching-5.jpg`),
                alt: 'Coaching-5'
            },
            {
                src: require(`./../../../../media/images/jpg/Coaching-6.jpg`),
                alt: 'Coaching-6'
            }
        ]
    }
]

class WebPortal extends React.Component {
    
    render (){
        return (
            <div>
                <WebHeader sliders={sliders} head={rootHeader} />
                <WebNav style={{'background':'#7cb342'}}/> 
                <section>
                    <main>
                        <Switch>
                            <Route exact path="/" component={() => <WebSectionHome head={rootHeader} images={imagesSectionMenu} items={servicesSectionMenu} style={{'background':'#7cb342'}}/>} />
                            <Route path="/servicios" component={() => <WebSectionService head={rootHeader} images={imagesSectionMenu} items={servicesSectionMenu} style={{'background':'#7cb342'}} />} />
                            <Route path="/especializaciones" component={()=><li />} />
                            <Route path="/cursos" component={()=> <WebSectionCourse courses={courses}/>} />
                            <Route path="/quienes-somos" component={()=><WebSectionPhilosophy />} />
                            <Route path="/contactanos" component={()=><WebSectionContact />} />
                        </Switch>
                     </main>
                </section>  
                <WebFooter style={{'background':'#7cb342'}}/> 
            </div>
        )
    }
}
export {WebPortal}