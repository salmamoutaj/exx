export const quizzes = [
  {
    id: "javascript",
    name: "JavaScript",
    questions: [
      {
        question: "Quel mot-clé est utilisé pour déclarer une variable en JavaScript ?",
        options: ["var", "let", "Tous les deux"],
        answer: 2,
      },
      {
        question: "Comment créer une fonction en JavaScript ?",
        options: ["function maFonction() {}", "func maFonction() {}", "create maFonction() {}"],
        answer: 0,
      },
      {
        question: "Quel symbole est utilisé pour le commentaire sur une seule ligne ?",
        options: ["#", "//", "/*"],
        answer: 1,
      },
      {
        question: "Quelle méthode est utilisée pour convertir une chaîne de caractères en nombre ?",
        options: ["parseInt()", "convertToNumber()", "toNumber()"],
        answer: 0,
      },
      {
        question: "Quelle structure de contrôle est utilisée pour faire des choix conditionnels ?",
        options: ["if", "switch", "Tous les deux"],
        answer: 2,
      },
      {
        question: "Quel est le bon moyen d'accéder à un élément HTML par son ID ?",
        options: ["document.getElementById('monId')", "document.getId('monId')", "document.querySelector('monId')"],
        answer: 0,
      },
      {
        question: "Quelle méthode est utilisée pour ajouter un élément à la fin d'un tableau ?",
        options: ["append()", "push()", "add()"],
        answer: 1,
      },
      {
        question: "Quelle méthode est utilisée pour supprimer le dernier élément d'un tableau ?",
        options: ["pop()", "remove()", "delete()"],
        answer: 0,
      },
      {
        question: "Comment vérifier le type d'une variable?",
        options: ["typeof", "checkType()", "getType()"],
        answer: 0,
      },
      {
        question: "Quel événement est déclenché lorsque l'utilisateur clique sur un élément ?",
        options: ["onClick", "click", "mouseClick"],
        answer: 1,
      },
    ],
  },
  {
    id: "html",
    name: "HTML",
    questions: [
      {
        question: "Quel est l'élément de base d'un document HTML ?",
        options: [
          "<html>",
          "<body>",
          "<head>",
        ],
        answer: 0,
      },
      {
        question: "Comment insérer un commentaire en HTML ?",
        options: ["<!-- commentaire -->", "// commentaire", "/* commentaire */"],
        answer: 0,
      },
      {
        question: "Quel élément HTML est utilisé pour créer des liens ?",
        options: ["<link>", "<a>", "<url>"],
        answer: 1,
      },
      {
        question: "Quel attribut est utilisé pour spécifier l'URL d'un lien ?",
        options: ["src", "href", "link"],
        answer: 1,
      },
      {
        question: "Quel élément est utilisé pour créer une liste non ordonnée ?",
        options: ["<ul>", "<ol>", "<list>"],
        answer: 0,
      },
      {
        question: "Comment définir un en-tête de niveau 1 en HTML ?",
        options: ["<h1>", "<header>", "<h0>"],
        answer: 0,
      },
      {
        question: "Quel élément HTML est utilisé pour insérer une image ?",
        options: ["<img>", "<picture>", "<image>"],
        answer: 0,
      },
      {
        question: "Quel attribut est utilisé pour donner un titre à une image ?",
        options: ["title", "alt", "src"],
        answer: 1,
      },
      {
        question: "Comment créer un tableau en HTML ?",
        options: ["<table>", "<tab>", "<tbody>"],
        answer: 0,
      },
      {
        question: "Quel élément HTML est utilisé pour ajouter un saut de ligne ?",
        options: ["<break>", "<line>", "<br>"],
        answer: 2,
      },
    ],
  },
  {
    id: "reactjs",
    name: "ReactJS",
    questions: [
      {
        question: "Quel est le mot-clé utilisé pour créer un composant fonctionnel en React ?",
        options: ['function', 'class', 'const'],
        answer: 0
      },
      {
        question: "Quelle méthode est utilisée pour mettre à jour l'état d'un composant en React ?",
        options: ['setState', 'updateState', 'changeState'],
        answer: 0
      },
      {
        question: "Quel hook est utilisé pour gérer l'état dans un composant fonctionnel ?",
        options: ['useState', 'useEffect', 'useContext'],
        answer: 0
      },
      {
        question: "Comment passer des propriétés d'un parent à un enfant en React ?",
        options: ['props', 'state', 'context'],
        answer: 0
      },
      {
        question: "Quelle méthode est appelée juste avant qu'un composant ne soit supprimé du DOM ?",
        options: ['componentWillUnmount', 'componentDidMount', 'componentDidUpdate'],
        answer: 0
      },
      {
        question: "Quel est le but du hook useEffect ?",
        options: ["Gérer l'état", 'Gérer les effets de bord', 'Rendre le composant'],
        answer: 1
      },
      {
        question: "Quel type de structure de données utilise React pour gérer l'interface utilisateur ?",
        options: ['DOM', 'Virtual DOM', 'HTML'],
        answer: 1
      },
      {
        question: "Comment peut-on éviter le rendu inutile d'un composant ?",
        options: ['shouldComponentUpdate', 'componentDidUpdate', 'setState'],
        answer: 0
      },
      {
        question: "Quelle bibliothèque est souvent utilisée avec React pour gérer le routage ?",
        options: ['React Router', 'Redux', 'Axios'],
        answer: 0
      },
      {
        question: "Quel mot-clé est utilisé pour créer un composant de classe en React ?",
        options: ['class', 'function', 'component'],
        answer: 0
      },
    ],
  },
  {
    id: "php",
    name: "PHP",
    questions: [
      {
        question: "Quel est l'extension de fichier pour les fichiers PHP ?",
        options: ['html', 'php', 'phtml'],
        answer: 1,
      },
      {
        question: "Quelle fonction est utilisée pour afficher des informations à l'écran en PHP ?",
        options: ['show()', 'print()', 'echo()'],
        answer: 2,
      },
      {
        question: "Comment déclarer une variable en PHP ?",
        options: ['$maVariable;', 'var $maVariable;', 'declare $maVariable;'],
        answer: 1,
      },
      {
        question: "Quelle est la bonne façon de créer un tableau en PHP ?",
        options: ['array[]', 'array()', '[]'],
        answer: 1,
      },
      {
        question: "Quelle fonction est utilisée pour inclure un fichier dans un autre fichier PHP ?",
        options: ['include()', 'require()', 'Les deux (A et B)'],
        answer: 2,
      },
      {
        question: "Comment créer une fonction en PHP ?",
        options: ['function maFonction() {}', 'create maFonction() {}', 'def maFonction() {}'],
        answer: 0,
      },
      {
        question: "Quel opérateur est utilisé pour la concaténation de chaînes en PHP ?",
        options: ['+', '.', '&'],
        answer: 1,
      },
      {
        question: "Comment accéder à un élément d'un tableau associatif en PHP ?",
        options: ['$monTableau["clé"]', '$monTableau.key', '$monTableau->clé'],
        answer: 0,
      },
      {
        question: "Quelle directive est utilisée pour démarrer une session en PHP ?",
        options: ['session_start()', 'start_session()', 'begin_session()'],
        answer: 0,
      },
      {
        question: "Comment vérifier si une variable est définie en PHP ?",
        options: ['isset()', 'defined()', 'exists()'],
        answer: 0,
      },
    ],
  },
  {
    id: "python",
    name: "Python",
    questions: [
      {
        question: "Quel est le symbole utilisé pour les commentaires en Python ?",
        options: ['#', '//', '/*'],
        answer: 0,
      },
      {
        question: "Quelle fonction est utilisée pour afficher des informations à l'écran en Python ?",
        options: ['print()', 'echo()', 'display()'],
        answer: 0,
      },
      {
        question: "Comment déclarer une variable en Python ?",
        options: ['var maVariable = 10', 'maVariable = 10', 'let maVariable = 10'],
        answer: 1,
      },
      {
        question: "Quel est le bon moyen de créer une liste en Python ?",
        options: ['[]', 'list()', 'array()'],
        answer: 0,
      },
      {
        question: "Comment ajouter un élément à une liste en Python ?",
        options: ['append()', 'add()', 'insert()'],
        answer: 0,
      },
      {
        question: "Quelle est la méthode pour supprimer un élément d'une liste en Python ?",
        options: ['remove()', 'delete()', 'pop()'],
        answer: 0,
      },
      {
        question: "Comment créer une fonction en Python ?",
        options: ['def maFonction():', 'function maFonction():', 'create maFonction():'],
        answer: 0,
      },
      {
        question: "Quel mot-clé est utilisé pour créer une boucle en Python ?",
        options: ['for', 'loop', 'while'],
        answer: 0,
      },
      {
        question: "Quelle fonction est utilisée pour obtenir la longueur d'une liste ?",
        options: ['length()', 'size()', 'len()'],
        answer: 2,
      },
      {
        question: "Comment vérifier si une clé existe dans un dictionnaire ?",
        options: ['if "clé" in monDictionnaire:', 'if monDictionnaire.has("clé"):','if "clé" exists in monDictionnaire:'],
        answer: 0,
      },
    ],
  },
  {
    id: "cpp",
    name: "C++",
    questions: [
      {
        question: "Quel est le symbole utilisé pour les commentaires sur une seule ligne en C++ ?",
        options: ['//', '#', '/*'],
        answer: 0
      },
      {
        question: "Quelle fonction est utilisée pour afficher des informations à l'écran en C++ ?",
        options: ['cout', 'print()', 'display()'],
        answer: 0
      },
      {
        question: "Comment déclarer une variable en C++ ?",
        options: ['var maVariable = 10;', 'int maVariable = 10;', 'maVariable: int = 10;'],
        answer: 1
      },
      {
        question: "Quel mot-clé est utilisé pour créer une classe en C++ ?",
        options: ['class', 'struct', 'object'],
        answer: 0
      },
      {
        question: "Quel opérateur est utilisé pour l'addition en C++ ?",
        options: ['+', '-', '*'],
        answer: 0
      },
      {
        question: "Quelle est la bonne façon d'inclure une bibliothèque standard en C++ ?",
        options: ['#include <library>', '#include "library.h"', '#include <iostream>'],
        answer: 2
      },
      {
        question: "Comment déclarer un tableau en C++ ?",
        options: ['int array[];', 'int array[10];', 'array<int> array;'],
        answer: 1
      },
      {
        question: "Quel est le bon moyen d'écrire une boucle for en C++ ?",
        options: ['for(int i = 0; i < 10; i++)', 'for(i = 0; i < 10; i++)', 'for(int i; i < 10; i++)'],
        answer: 0
      },
      {
        question: "Comment retourner une valeur d'une fonction en C++ ?",
        options: ['return value;', 'value;', 'return(value);'],
        answer: 0
      },
      {
        question: "Quel mot-clé est utilisé pour hériter d'une classe en C++ ?",
        options: ['inherit', 'extends', 'public'],
        answer: 2
      },
    ],
  },
];