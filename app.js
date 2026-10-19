var JSEX=[
{ch:"Bases",t:"Déclarer une variable",c:"<p>Créez une constante <code>nom</code> contenant votre prénom, puis affichez-la avec <code>console.log</code>.</p>",start:"// Écrivez votre code ici\n",vars:["nom"],hint:"const nom = \"Sara\"; puis console.log(nom);",sol:"const nom = \"Sara\";\nconsole.log(nom);",tests:[["nom est une chaîne non vide",function(l,v){return typeof v.nom==="string"&&v.nom.trim().length>0}],["nom est affichée dans la console",function(l,v){return l.indexOf(String(v.nom))>-1}]]},
{ch:"Bases",t:"Écrire une fonction",c:"<p>Écrivez une fonction <code>carre(n)</code> qui retourne le carré de <code>n</code>. Exemple : <code>carre(4)</code> retourne <code>16</code>.</p>",start:"function carre(n){\n  // votre code\n}\n",vars:["carre"],hint:"Retournez n * n avec return.",sol:"function carre(n){\n  return n * n;\n}",tests:[["carre(4) retourne 16",function(l,v){return typeof v.carre==="function"&&v.carre(4)===16}],["carre(-3) retourne 9",function(l,v){return typeof v.carre==="function"&&v.carre(-3)===9}]]},
{ch:"Tableaux",t:"Filtrer un tableau",c:"<p>Créez le tableau <code>admis</code> avec les notes de <code>notes</code> supérieures ou égales à 10, avec <code>filter</code>.</p>",start:"const notes = [12, 7, 15, 9, 18];\n// créez admis ici\n",vars:["admis"],hint:"notes.filter(n => n >= 10)",sol:"const notes = [12, 7, 15, 9, 18];\nconst admis = notes.filter(n => n >= 10);",tests:[["admis est un tableau",function(l,v){return Array.isArray(v.admis)}],["admis vaut [12, 15, 18]",function(l,v){return JSON.stringify(v.admis)==="[12,15,18]"}]]},
{ch:"Tableaux",t:"Calculer une moyenne",c:"<p>Calculez la moyenne de <code>notes</code> dans <code>moyenne</code>, avec <code>reduce</code>.</p>",start:"const notes = [12, 8, 16, 14];\n// créez moyenne ici\n",vars:["moyenne"],hint:"notes.reduce((a, b) => a + b, 0) / notes.length",sol:"const notes = [12, 8, 16, 14];\nconst moyenne = notes.reduce((a, b) => a + b, 0) / notes.length;",tests:[["moyenne est un nombre",function(l,v){return typeof v.moyenne==="number"}],["moyenne vaut 12.5",function(l,v){return v.moyenne===12.5}]]}
];
var JSCARDS=[
["Quelle différence entre <code>const</code> et <code>let</code> ?","<code>const</code> interdit la réaffectation de la variable ; <code>let</code> l'autorise."],
["Que retourne <code>typeof \"abc\"</code> ?","<code>\"string\"</code>"],
["Que fait <code>return</code> dans une fonction ?","Il arrête la fonction et renvoie une valeur à l'appelant."],
["À quoi sert <code>map</code> ?","À transformer chaque élément d'un tableau et à renvoyer un nouveau tableau."],
["À quoi sert <code>filter</code> ?","À garder seulement les éléments qui passent un test, dans un nouveau tableau."],
["À quoi sert <code>reduce</code> ?","À réduire un tableau à une seule valeur (somme, moyenne, objet…)."],
["Différence entre <code>==</code> et <code>===</code> ?","<code>===</code> compare valeur et type, sans conversion ; <code>==</code> convertit les types."],
["Que renvoie <code>[1,2,3].length</code> ?","<code>3</code>, le nombre d'éléments du tableau."]
];
var Q=function(v,s){return v.doc.querySelectorAll(s)};
var LANGS={
js:{name:"JavaScript",desc:"Variables, fonctions et tableaux, en écrivant du vrai code exécuté et corrigé automatiquement.",ex:JSEX,cards:JSCARDS},
html:{name:"HTML et CSS",desc:"Structure d'une page, listes, liens et styles. Votre code est analysé et un aperçu s'affiche.",ex:[
{ch:"HTML",k:"html",t:"Titre et paragraphe",c:"<p>Écrivez un titre <code>&lt;h1&gt;</code> contenant « Bonjour » et un paragraphe <code>&lt;p&gt;</code>.</p>",start:"<!-- votre code -->\n",vars:[],hint:"<h1>Bonjour</h1> puis <p>Un texte</p>",sol:"<h1>Bonjour</h1>\n<p>Bienvenue sur ma page.</p>",tests:[["Un titre h1 contient « Bonjour »",function(l,v){var h=Q(v,"h1")[0];return !!h&&/bonjour/i.test(h.textContent)}],["Un paragraphe p existe",function(l,v){return Q(v,"p").length>0}]]},
{ch:"HTML",k:"html",t:"Une liste",c:"<p>Créez une liste non ordonnée <code>&lt;ul&gt;</code> avec exactement 3 éléments <code>&lt;li&gt;</code>.</p>",start:"<!-- votre code -->\n",vars:[],hint:"<ul><li>…</li><li>…</li><li>…</li></ul>",sol:"<ul>\n<li>HTML</li>\n<li>CSS</li>\n<li>JavaScript</li>\n</ul>",tests:[["Une liste ul existe",function(l,v){return Q(v,"ul").length===1}],["Elle contient 3 éléments li",function(l,v){return Q(v,"ul li").length===3}]]},
{ch:"HTML",k:"html",t:"Un lien",c:"<p>Créez un lien <code>&lt;a&gt;</code> avec un texte et un attribut <code>href</code> qui commence par <code>https://</code>.</p>",start:"<!-- votre code -->\n",vars:[],hint:"<a href=\"https://example.com\">Texte</a>",sol:"<a href=\"https://example.com\">Mon site</a>",tests:[["Un lien a avec un href https",function(l,v){var a=Q(v,"a")[0];return !!a&&/^https:\/\//.test(a.getAttribute("href")||"")}],["Le lien a un texte",function(l,v){var a=Q(v,"a")[0];return !!a&&a.textContent.trim().length>0}]]},
{ch:"CSS",k:"html",t:"Colorer un titre",c:"<p>Ajoutez une balise <code>&lt;style&gt;</code> qui donne une couleur (propriété <code>color</code>) à <code>h1</code>, et un titre <code>&lt;h1&gt;</code>.</p>",start:"<!-- votre code -->\n",vars:[],hint:"<style>h1 { color: teal; }</style>",sol:"<style>\nh1 { color: teal; }\n</style>\n<h1>Mon titre</h1>",tests:[["Une règle CSS color pour h1",function(l,v){var s=Q(v,"style")[0];return !!s&&/h1\s*\{[^}]*color\s*:/.test(s.textContent)}],["Un titre h1 existe",function(l,v){return Q(v,"h1").length>0}]]}
],cards:[
["Que signifie HTML ?","HyperText Markup Language : le langage qui décrit la structure d'une page."],
["À quoi sert CSS ?","À définir l'apparence : couleurs, tailles, mise en page."],
["Quelle balise crée un lien ?","<code>&lt;a href=\"…\"&gt;</code>"],
["Quelle propriété CSS aligne les éléments avec Flexbox ?","<code>display: flex</code> sur le conteneur, puis <code>justify-content</code> et <code>align-items</code>."]
]},
py:{name:"Python",desc:"Affichage, fonctions et boucles. Ici la correction analyse votre code (Python n'est pas exécuté dans cette démo).",ex:[
{ch:"Bases",k:"pat",t:"Afficher du texte",c:"<p>Affichez le mot <code>Bonjour</code> avec <code>print</code>.</p>",start:"# votre code\n",vars:[],hint:"print(\"Bonjour\")",sol:"print(\"Bonjour\")",tests:[["print affiche Bonjour",function(l,v){return /print\s*\(\s*[\"']Bonjour[\"']\s*\)/.test(v.code)}]]},
{ch:"Bases",k:"pat",t:"Définir une fonction",c:"<p>Définissez une fonction <code>double(n)</code> qui retourne <code>n * 2</code>.</p>",start:"# votre code\n",vars:[],hint:"def double(n):\n    return n * 2",sol:"def double(n):\n    return n * 2",tests:[["La fonction double(n) est définie",function(l,v){return /def\s+double\s*\(\s*\w+\s*\)\s*:/.test(v.code)}],["Elle utilise return",function(l,v){return /return\s+\w+\s*\*\s*2|return\s+2\s*\*\s*\w+/.test(v.code)}]]},
{ch:"Boucles",k:"pat",t:"Boucle for",c:"<p>Affichez les nombres de 0 à 4 avec une boucle <code>for</code> et <code>range(5)</code>.</p>",start:"# votre code\n",vars:[],hint:"for i in range(5):\n    print(i)",sol:"for i in range(5):\n    print(i)",tests:[["Une boucle for avec range(5)",function(l,v){return /for\s+\w+\s+in\s+range\s*\(\s*5\s*\)\s*:/.test(v.code)}],["La boucle utilise print",function(l,v){return /print\s*\(/.test(v.code)}]]}
],cards:[
["Comment afficher du texte en Python ?","<code>print(\"texte\")</code>"],
["Comment Python délimite-t-il un bloc de code ?","Par l'indentation (en général 4 espaces), pas par des accolades."],
["Que fait <code>range(5)</code> ?","Produit les nombres de 0 à 4."],
["Différence entre liste et tuple ?","Une liste <code>[ ]</code> est modifiable ; un tuple <code>( )</code> ne l'est pas."]
]},
sql:{name:"SQL",desc:"Interroger une base de données avec SELECT, WHERE et ORDER BY. La correction analyse votre requête (non exécutée dans cette démo).",ex:[
{ch:"Requêtes",k:"pat",t:"Tout sélectionner",c:"<p>Sélectionnez toutes les colonnes de la table <code>etudiants</code>.</p>",start:"-- votre requête\n",vars:[],hint:"SELECT * FROM etudiants;",sol:"SELECT * FROM etudiants;",tests:[["SELECT * FROM etudiants",function(l,v){return /select\s+\*\s+from\s+etudiants/i.test(v.code)}]]},
{ch:"Requêtes",k:"pat",t:"Filtrer avec WHERE",c:"<p>Sélectionnez les étudiants dont <code>age</code> est supérieur à 18.</p>",start:"-- votre requête\n",vars:[],hint:"SELECT * FROM etudiants WHERE age > 18;",sol:"SELECT * FROM etudiants WHERE age > 18;",tests:[["SELECT … FROM etudiants WHERE age > 18",function(l,v){return /select\s+[\s\S]+\s+from\s+etudiants\s+where\s+age\s*>\s*18/i.test(v.code)}]]},
{ch:"Requêtes",k:"pat",t:"Trier les résultats",c:"<p>Sélectionnez tous les étudiants triés par <code>nom</code>.</p>",start:"-- votre requête\n",vars:[],hint:"SELECT * FROM etudiants ORDER BY nom;",sol:"SELECT * FROM etudiants ORDER BY nom;",tests:[["Sélection depuis etudiants",function(l,v){return /select\s+[\s\S]+\s+from\s+etudiants/i.test(v.code)}],["Tri avec ORDER BY nom",function(l,v){return /order\s+by\s+nom/i.test(v.code)}]]}
],cards:[
["À quoi sert <code>SELECT</code> ?","À lire des données dans une table."],
["À quoi sert <code>WHERE</code> ?","À filtrer les lignes selon une condition."],
["À quoi sert <code>JOIN</code> ?","À combiner les lignes de deux tables grâce à une colonne commune."],
["Qu'est-ce qu'une clé primaire ?","Une colonne qui identifie chaque ligne de façon unique."]
]}
};
Object.assign(LANGS,{
java:{name:'Java',desc:'Affichage, variables et méthodes. La correction analyse votre code (Java n’est pas exécuté dans cette démo).',ex:[
{ch:'Bases',k:'pat',t:'Afficher du texte',c:'<p>Affichez le mot <code>Bonjour</code> avec <code>System.out.println</code>.</p>',start:'// votre code\n',vars:[],hint:'System.out.println("Bonjour");',sol:'System.out.println("Bonjour");',tests:[['println affiche Bonjour',function(l,v){return /System\.out\.println\s*\(\s*"Bonjour"\s*\)\s*;/.test(v.code)}]]},
{ch:'Bases',k:'pat',t:'Déclarer des variables',c:'<p>Déclarez un entier <code>age</code> égal à 20 et une chaîne <code>nom</code> avec votre prénom.</p>',start:'// votre code\n',vars:[],hint:'int age = 20; puis String nom = "Sara";',sol:'int age = 20;\nString nom = "Sara";',tests:[['int age = 20;',function(l,v){return /int\s+age\s*=\s*20\s*;/.test(v.code)}],['String nom = "…";',function(l,v){return /String\s+nom\s*=\s*"[^"]*"\s*;/.test(v.code)}]]},
{ch:'Méthodes',k:'pat',t:'Écrire une méthode',c:'<p>Écrivez une méthode <code>static int carre(int n)</code> qui retourne le carré de <code>n</code>.</p>',start:'// votre code\n',vars:[],hint:'static int carre(int n) { return n * n; }',sol:'public static int carre(int n) {\n    return n * n;\n}',tests:[['La méthode carre(int n) existe',function(l,v){return /static\s+int\s+carre\s*\(\s*int\s+\w+\s*\)/.test(v.code)}],['Elle retourne n * n',function(l,v){return /return\s+\w+\s*\*\s*\w+\s*;/.test(v.code)}]]}
],cards:[
['Java est-il compilé ou interprété ?','Compilé en bytecode, puis exécuté par la machine virtuelle Java (JVM).'],
['Quelle différence entre <code>==</code> et <code>equals</code> pour les chaînes ?','<code>==</code> compare les références ; <code>equals</code> compare le contenu.'],
['Quelle est la signature de la méthode principale ?','<code>public static void main(String[] args)</code>'],
['Quelle classe sert de tableau dynamique ?','<code>ArrayList&lt;T&gt;</code>']
]},
cpp:{name:'C++',desc:'Affichage, variables et boucles. La correction analyse votre code (C++ n’est pas exécuté dans cette démo).',ex:[
{ch:'Bases',k:'pat',t:'Afficher du texte',c:'<p>Affichez le mot <code>Bonjour</code> avec <code>cout</code>.</p>',start:'// votre code\n',vars:[],hint:'std::cout << "Bonjour" << std::endl;',sol:'std::cout << "Bonjour" << std::endl;',tests:[['cout affiche Bonjour',function(l,v){return /(std::)?cout\s*<<\s*"Bonjour"[^;]*;/.test(v.code)}]]},
{ch:'Bases',k:'pat',t:'Déclarer des variables',c:'<p>Déclarez un entier <code>age</code> égal à 20 et une chaîne <code>nom</code>.</p>',start:'// votre code\n',vars:[],hint:'int age = 20; puis std::string nom = "Sara";',sol:'int age = 20;\nstd::string nom = "Sara";',tests:[['int age = 20;',function(l,v){return /int\s+age\s*=\s*20\s*;/.test(v.code)}],['string nom = "…";',function(l,v){return /(std::)?string\s+nom\s*=\s*"[^"]*"\s*;/.test(v.code)}]]},
{ch:'Boucles',k:'pat',t:'Boucle for',c:'<p>Affichez les nombres de 0 à 4 avec une boucle <code>for</code> sur une variable <code>i</code>.</p>',start:'// votre code\n',vars:[],hint:'for (int i = 0; i < 5; i++) { std::cout << i << std::endl; }',sol:'for (int i = 0; i < 5; i++) {\n    std::cout << i << std::endl;\n}',tests:[['for (int i = 0; i < 5; i++)',function(l,v){return /for\s*\(\s*int\s+i\s*=\s*0\s*;\s*i\s*<\s*5\s*;\s*i\+\+\s*\)/.test(v.code)}],['La boucle affiche i avec cout',function(l,v){return /cout\s*<<\s*i/.test(v.code)}]]}
],cards:[
['Quelle ligne permet d’utiliser <code>cout</code> ?','<code>#include &lt;iostream&gt;</code>'],
['Qu’est-ce qu’un pointeur ?','Une variable qui contient l’adresse mémoire d’une autre variable.'],
['Qu’est-ce qu’une référence (<code>&amp;</code>) ?','Un alias vers une variable existante, sans copie.'],
['Quel conteneur sert de tableau dynamique ?','<code>std::vector&lt;T&gt;</code>']
]},
cs:{name:'C#',desc:'Affichage, variables et méthodes. La correction analyse votre code (C# n’est pas exécuté dans cette démo).',ex:[
{ch:'Bases',k:'pat',t:'Afficher du texte',c:'<p>Affichez le mot <code>Bonjour</code> avec <code>Console.WriteLine</code>.</p>',start:'// votre code\n',vars:[],hint:'Console.WriteLine("Bonjour");',sol:'Console.WriteLine("Bonjour");',tests:[['WriteLine affiche Bonjour',function(l,v){return /Console\.WriteLine\s*\(\s*"Bonjour"\s*\)\s*;/.test(v.code)}]]},
{ch:'Bases',k:'pat',t:'Déclarer des variables',c:'<p>Déclarez un entier <code>age</code> égal à 20 et une chaîne <code>nom</code>.</p>',start:'// votre code\n',vars:[],hint:'int age = 20; puis string nom = "Sara";',sol:'int age = 20;\nstring nom = "Sara";',tests:[['int age = 20;',function(l,v){return /int\s+age\s*=\s*20\s*;/.test(v.code)}],['string nom = "…";',function(l,v){return /string\s+nom\s*=\s*"[^"]*"\s*;/.test(v.code)}]]},
{ch:'Méthodes',k:'pat',t:'Écrire une méthode',c:'<p>Écrivez une méthode <code>static int Carre(int n)</code> qui retourne le carré de <code>n</code>.</p>',start:'// votre code\n',vars:[],hint:'static int Carre(int n) { return n * n; }',sol:'static int Carre(int n)\n{\n    return n * n;\n}',tests:[['La méthode Carre(int n) existe',function(l,v){return /static\s+int\s+Carre\s*\(\s*int\s+\w+\s*\)/.test(v.code)}],['Elle retourne n * n',function(l,v){return /return\s+\w+\s*\*\s*\w+\s*;/.test(v.code)}]]}
],cards:[
['Sur quelle plateforme tourne C# ?','Sur .NET, avec le compilateur Roslyn et le runtime CLR.'],
['À quoi sert <code>var</code> ?','À laisser le compilateur déduire le type d’une variable locale.'],
['Quelle collection sert de tableau dynamique ?','<code>List&lt;T&gt;</code>'],
['Comment afficher du texte dans la console ?','<code>Console.WriteLine("texte");</code>']
]}
});
var EX=JSEX,CARDS=JSCARDS;
function setLang(l){if(!LANGS[l])l="js";if(!me.P){me.P={};me.P.js={done:me.done||{},cards:me.cards||{}}}if(!me.P[l])me.P[l]={done:{},cards:{}};me.lang=l;me.done=me.P[l].done;me.cards=me.P[l].cards;EX=LANGS[l].ex;CARDS=LANGS[l].cards;I=0;R=null;X=null}
var LESSONS={
js:{t:'JavaScript : les bases',i:'Lisez cette fiche, testez les exemples, puis passez aux exercices.',s:[
{h:'Les variables',p:'Une variable stocke une valeur. Utilisez <mark>const</mark> par défaut, et <mark>let</mark> si la valeur doit changer.',x:'const nom = "Sara";\nlet age = 20;\nage = 21;\nconsole.log(nom, age);',o:'Sara 21',t:'Affichez vos résultats avec <mark>console.log</mark> pour vérifier votre code.'},
{h:'Les fonctions',p:'Une fonction regroupe des instructions réutilisables. <mark>return</mark> renvoie le résultat à celui qui l’appelle.',x:'function double(n) {\n  return n * 2;\n}\nconsole.log(double(5));',o:'10',w:'Sans <mark>return</mark>, la fonction renvoie <mark>undefined</mark>.'},
{h:'Les tableaux',p:'Trois méthodes essentielles : <mark>map</mark> transforme, <mark>filter</mark> garde, <mark>reduce</mark> combine.',x:'const n = [1, 2, 3, 4];\nn.map(x => x * 2);              // [2, 4, 6, 8]\nn.filter(x => x > 2);           // [3, 4]\nn.reduce((a, b) => a + b, 0);   // 10',t:'Ces méthodes renvoient un nouveau résultat sans modifier le tableau d’origine.'}],
r:['<mark>const</mark> par défaut, <mark>let</mark> si la valeur change','<mark>return</mark> renvoie une valeur','<mark>map</mark> transforme, <mark>filter</mark> sélectionne, <mark>reduce</mark> agrège','<mark>===</mark> compare la valeur et le type']},
html:{t:'HTML et CSS : les bases',i:'HTML décrit la structure d’une page, CSS décrit son apparence.',s:[
{h:'La structure',p:'Une page est faite de <mark>balises</mark> : une balise ouvrante, un contenu, une balise fermante.',x:'<h1>Mon titre</h1>\n<p>Un paragraphe.</p>\n<a href="https://example.com">Un lien</a>',t:'Utilisez un seul <mark>h1</mark> par page.'},
{h:'Les listes',p:'<mark>ul</mark> crée une liste à puces, <mark>ol</mark> une liste numérotée. Chaque élément est un <mark>li</mark>.',x:'<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>',w:'Placez les <mark>li</mark> uniquement à l’intérieur de <mark>ul</mark> ou <mark>ol</mark>.'},
{h:'Le style CSS',p:'Une règle CSS = un <mark>sélecteur</mark> + des <mark>propriétés</mark> entre accolades.',x:'<style>\n  h1 { color: teal; }\n</style>\n<h1>Titre coloré</h1>',w:'Chaque propriété se termine par un point-virgule.'}],
r:['Une balise ouvre et ferme son contenu','<mark>a href</mark> crée un lien','<mark>ul</mark> et <mark>li</mark> forment une liste','CSS : sélecteur + propriétés']},
py:{t:'Python : les bases',i:'Python se lit presque comme du texte : syntaxe courte, indentation obligatoire.',s:[
{h:'Afficher et stocker',p:'<mark>print()</mark> affiche une valeur. Une variable se crée en lui donnant une valeur, sans mot-clé.',x:'nom = "Sara"\nage = 20\nprint(nom, age)',o:'Sara 20'},
{h:'Les fonctions',p:'<mark>def</mark> définit une fonction. Son corps est <mark>indenté</mark>.',x:'def double(n):\n    return n * 2\n\nprint(double(5))',o:'10',w:'L’indentation fait partie de la syntaxe : 4 espaces.'},
{h:'Les boucles',p:'<mark>range(5)</mark> produit 0, 1, 2, 3, 4 : le 5 est exclu.',x:'for i in range(5):\n    print(i)',o:'0 1 2 3 4',t:'Les deux-points <mark>:</mark> introduisent toujours un bloc indenté.'}],
r:['<mark>print()</mark> affiche','<mark>def</mark> définit une fonction','Indentation = structure du code','<mark>range(n)</mark> va de 0 à n-1']},
sql:{t:'SQL : les bases',i:'SQL sert à interroger une base de données : on décrit ce qu’on veut, pas comment l’obtenir.',s:[
{h:'Lire des données',p:'<mark>SELECT</mark> choisit les colonnes, <mark>FROM</mark> choisit la table.',x:'SELECT nom, age\nFROM etudiants;',t:'<mark>*</mark> signifie toutes les colonnes.'},
{h:'Filtrer',p:'<mark>WHERE</mark> garde seulement les lignes qui respectent une condition.',x:'SELECT *\nFROM etudiants\nWHERE age > 18;'},
{h:'Trier',p:'<mark>ORDER BY</mark> trie les résultats. Ajoutez <mark>DESC</mark> pour l’ordre décroissant.',x:'SELECT * FROM etudiants\nORDER BY nom;',w:'Terminez chaque requête par un point-virgule.'}],
r:['<mark>SELECT … FROM</mark> lit une table','<mark>WHERE</mark> filtre','<mark>ORDER BY</mark> trie','<mark>*</mark> = toutes les colonnes']},
java:{t:'Java : les bases',i:'Java est typé et orienté objet : tout programme vit dans une classe.',s:[
{h:'Le programme minimal',p:'Un programme commence par la méthode <mark>main</mark> d’une classe.',x:'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Bonjour");\n  }\n}',o:'Bonjour'},
{h:'Les variables',p:'Java est <mark>typé</mark> : on déclare le type avant le nom.',x:'int age = 20;\nString nom = "Sara";',w:'Chaque instruction se termine par un point-virgule.'},
{h:'Les méthodes',p:'Une méthode indique son <mark>type de retour</mark>, son nom et ses paramètres typés.',x:'static int carre(int n) {\n  return n * n;\n}',t:'<mark>void</mark> signifie « ne retourne rien ».'}],
r:['Tout est dans une classe','Le type se déclare avant le nom','<mark>main</mark> est le point d’entrée','Point-virgule à chaque instruction']},
cpp:{t:'C++ : les bases',i:'C++ est rapide et proche de la machine : vous contrôlez la mémoire.',s:[
{h:'Afficher du texte',p:'<mark>cout</mark> écrit dans la console avec l’opérateur <mark>&lt;&lt;</mark>.',x:'#include <iostream>\nint main() {\n  std::cout << "Bonjour" << std::endl;\n  return 0;\n}',o:'Bonjour'},
{h:'Les variables',p:'Comme en Java, le <mark>type</mark> se déclare avant le nom.',x:'int age = 20;\nstd::string nom = "Sara";',w:'N’oubliez pas <mark>#include &lt;string&gt;</mark> pour utiliser <mark>std::string</mark>.'},
{h:'La boucle for',p:'<mark>for</mark> a trois parties : initialisation, condition, incrément.',x:'for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}',o:'0 1 2 3 4'}],
r:['<mark>#include</mark> importe une bibliothèque','<mark>cout &lt;&lt;</mark> affiche','Type + nom pour chaque variable','<mark>for (init; condition; pas)</mark>']},
cs:{t:'C# : les bases',i:'C# est le langage de .NET : lisible, typé et très utilisé pour le web et les jeux.',s:[
{h:'Afficher du texte',p:'<mark>Console.WriteLine</mark> affiche une ligne dans la console.',x:'Console.WriteLine("Bonjour");',o:'Bonjour'},
{h:'Les variables',p:'<mark>var</mark> laisse le compilateur deviner le type.',x:'int age = 20;\nstring nom = "Sara";\nvar ville = "Tunis";',t:'En C#, <mark>string</mark> s’écrit en minuscules.'},
{h:'Les méthodes',p:'Une méthode a un <mark>type de retour</mark>, un nom (souvent en majuscule) et des paramètres.',x:'static int Carre(int n)\n{\n  return n * n;\n}',w:'Ne confondez pas <mark>Carre</mark> et <mark>carre</mark> : C# distingue majuscules et minuscules.'}],
r:['<mark>Console.WriteLine</mark> affiche','<mark>var</mark> déduit le type','Les méthodes prennent une majuscule','Majuscules et minuscules comptent']}
};
function hl(code,l){
 var K={js:' const let var function return if else for while class new true false null undefined ',py:' def return if elif else for while in range print import class True False None ',sql:' select from where order by join on insert into values update delete and or limit as desc asc ',java:' public static void int String class return if else for while new ',cpp:' include int return if else for while std string void ',cs:' static int string var return if else for while new class void using '}[l]||' ';
 var re=l==='html'?/(<!--[\s\S]*?-->)|(<\/?[a-zA-Z][^>]*>)/g:l==='py'?/(#.*)|("[^"\n]*"|'[^'\n]*')|(\b\d+(?:\.\d+)?\b)|([A-Za-z_]\w*)/g:l==='sql'?/(--.*)|("[^"\n]*"|'[^'\n]*')|(\b\d+(?:\.\d+)?\b)|([A-Za-z_]\w*)/g:/(\/\/.*)|("[^"\n]*"|'[^'\n]*')|(\b\d+(?:\.\d+)?\b)|([A-Za-z_]\w*)/g;
 var o='',last=0,m;
 while((m=re.exec(code))){o+=esc(code.slice(last,m.index));last=re.lastIndex;var t=m[0],c='';
  if(l==='html'&&!m[1]){o+='<span class="tg">'+esc(t).replace(/(&quot;.*?&quot;)/g,'<span class="s">$1</span>')+'</span>';continue}
  if(m[1])c='c';else if(m[2])c='s';else if(m[3])c='n';else if(m[4]&&K.indexOf(' '+(l==='sql'?t.toLowerCase():t)+' ')>-1)c='k';
  o+=c?'<span class="'+c+'">'+esc(t)+'</span>':esc(t)}
 return o+esc(code.slice(last))}
function coursView(){
 var L=LESSONS[me.lang],v=$("v");
 if(!L){v.innerHTML='<div class="card empty"><h2>Fiche bientôt disponible</h2></div>';return}
 var h='<div class="fiche"><h1>'+L.t+'</h1><p class="lead">'+L.i+'</p>';
 L.s.forEach(function(s,i){h+='<div class="sec c'+(i%3)+'"><h2>'+s.h+'</h2><p style="margin:0 0 4px">'+s.p+'</p><pre class="cd">'+hl(s.x,me.lang)+'</pre>'+(s.o?'<p class="rs"><b>Résultat :</b> '+esc(s.o)+'</p>':'')+(s.t?'<div class="co tip"><b>À retenir :</b> '+s.t+'</div>':'')+(s.w?'<div class="co wa"><b>Attention :</b> '+s.w+'</div>':'')+'</div>'});
 h+='<div class="rec"><h2>Conclusion du cours</h2><ul>'+L.r.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul></div><div class="row"><button class="btn g" id="gx">Passer aux exercices</button><button class="btn" id="gc">Réviser avec les cartes</button></div></div>';
 v.innerHTML=h;
 $("gx").onclick=function(){V="ex";shell()};$("gc").onclick=function(){V="rev";R=null;shell()};
}
var X=null,xt=null;
var EXAMQ={
js:[['Quelle déclaration empêche de réaffecter la variable ?',['let x = 1','const x = 1','var x = 1'],1],['Que retourne <code>typeof "abc"</code> ?',['text','string','char'],1],['Quel est le résultat de <code>[1, 2, 3, 4].filter(x => x > 2)</code> ?',['[3, 4]','[1, 2]','[3]'],0],['Que renvoie une fonction sans <code>return</code> ?',['0','undefined','null'],1],['Quelle méthode réduit un tableau à une seule valeur ?',['map','filter','reduce'],2]],
html:[['Quelle balise crée un lien ?',['&lt;a&gt;','&lt;link&gt;','&lt;href&gt;'],0],['Quelle balise crée une liste à puces ?',['&lt;ol&gt;','&lt;ul&gt;','&lt;li&gt;'],1],['Quelle propriété CSS change la couleur du texte ?',['color','background','font-color'],0],['Combien de <code>h1</code> recommande-t-on par page ?',['Un seul','Autant que nécessaire','Aucun'],0],['Quelle balise contient des règles CSS dans la page ?',['&lt;css&gt;','&lt;style&gt;','&lt;script&gt;'],1]],
py:[['Comment afficher du texte en Python ?',['echo("x")','print("x")','console.log("x")'],1],['Quel mot-clé définit une fonction ?',['function','def','fun'],1],['Que produit <code>range(3)</code> ?',['0, 1, 2','1, 2, 3','0, 1, 2, 3'],0],['Comment Python délimite-t-il un bloc de code ?',['Avec des accolades','Avec l’indentation','Avec begin / end'],1],['Quelle structure n’est pas modifiable ?',['La liste','Le tuple','Le dictionnaire'],1]],
sql:[['Quelle clause indique la table à lire ?',['SELECT','FROM','WHERE'],1],['Quelle clause filtre les lignes ?',['WHERE','ORDER BY','JOIN'],0],['Que signifie <code>SELECT *</code> ?',['Toutes les lignes seulement','Toutes les colonnes','Aucune colonne'],1],['Quelle requête trie par nom en ordre décroissant ?',['ORDER BY nom DESC','SORT nom DOWN','GROUP BY nom'],0],['Qu’est-ce qu’une clé primaire ?',['Une colonne qui identifie chaque ligne','Une colonne de texte','Une table spéciale'],0]],
java:[['Quelle est la méthode d’entrée d’un programme Java ?',['start()','main(String[] args)','run()'],1],['Quelle déclaration est valide ?',['age int = 20;','int age = 20;','var int age = 20;'],1],['Comment comparer le contenu de deux chaînes ?',['==','equals','compare'],1],['Que signifie <code>void</code> ?',['La méthode ne retourne rien','La méthode retourne 0','La méthode est privée'],0],['Un programme Java est exécuté par…',['le navigateur','la JVM','le compilateur CSS'],1]],
cpp:[['Quelle ligne permet d’utiliser <code>cout</code> ?',['#include &lt;iostream&gt;','import iostream','using cout'],0],['Que contient un pointeur ?',['Une valeur entière','Une adresse mémoire','Un texte'],1],['Quel conteneur est un tableau dynamique ?',['std::vector','std::pair','std::tuple'],0],['Combien d’itérations fait <code>for (int i = 0; i &lt; 5; i++)</code> ?',['4','5','6'],1],['Qu’est-ce qu’une référence ?',['Une copie','Un alias d’une variable','Un pointeur nul'],1]],
cs:[['Comment afficher du texte dans la console ?',['Console.WriteLine("x");','print("x");','System.out.println("x");'],0],['À quoi sert <code>var</code> ?',['À déduire le type','À déclarer une constante','À créer une classe'],0],['Quel type contient un texte en C# ?',['text','string','char'],1],['Quelle collection est un tableau dynamique ?',['List&lt;T&gt;','Stack','Queue'],0],['C# distingue-t-il <code>Carre</code> et <code>carre</code> ?',['Oui','Non','Seulement pour les classes'],0]]
};
function examView(){
 var Q=EXAMQ[me.lang],ex=EX[EX.length-1],name=LANGS[me.lang].name,v=$("v");
 if(!me.exam)me.exam={};
 if(!X){var b=me.exam[me.lang];
  v.innerHTML='<div class="fiche"><h1>Examen blanc : '+name+'</h1><p class="lead">Un exemple d’examen pour vous mettre en condition.</p><div class="card"><ul class="rules"><li><mark>15 minutes</mark> chronométrées</li><li><mark>5 QCM</mark> à 2 points = 10 points</li><li><mark>1 exercice pratique</mark> = 10 points</li><li>Note sur <mark>20</mark>, admis à partir de <mark>10</mark></li></ul>'+(b!==undefined?'<p class="rs"><b>Meilleure note :</b> '+b+' / 20</p>':'')+'<button class="btn p" id="xs">Commencer l’examen</button></div></div>';
  $("xs").onclick=function(){X={lang:me.lang,a:{},code:ex.start,end:Date.now()+900000,fin:false};examView()};return}
 if(X.fin){var r=X.res,h='<div class="fiche"><h1>Résultat</h1><div class="card" style="text-align:center"><div class="big">'+r.tot+' / 20</div><h2 style="color:var(--'+(r.tot>=10?'ok':'ko')+')">'+(r.tot>=10?'Admis':'Non admis (minimum 10)')+'</h2><p>QCM : '+r.q+' / 10 · Exercice : '+r.p+' / 10</p>'+(r.xp?'<p class="rs"><b>+100 XP</b> pour votre première réussite</p>':'')+'</div>';
  Q.forEach(function(k,i){var a=X.a[i],ok=a===k[2];h+='<div class="card q"><p style="margin:0"><b style="color:var(--'+(ok?'ok':'ko')+')">'+(ok?'✓ ':'✗ ')+(i+1)+'.</b> '+k[0]+'</p><p class="rs" style="margin:6px 0 0">Bonne réponse : <b>'+k[1][k[2]]+'</b>'+(ok?'':' · Votre réponse : '+(a===undefined?'aucune':k[1][a]))+'</p></div>'});
  h+='<div class="card q"><p style="margin:0 0 6px"><b>Exercice pratique : '+ex.t+'</b></p>'+r.tl.map(function(t){return '<div class="t '+(t[1]?'ok':'ko')+'">'+(t[1]?'✓ ':'✗ ')+t[0]+'</div>'}).join('')+'</div><div class="row"><button class="btn p" id="xa">Refaire l’examen</button><button class="btn" id="xc">Revoir la fiche de cours</button></div></div>';
  v.innerHTML=h;$("xa").onclick=function(){X=null;examView()};$("xc").onclick=function(){V="cours";shell()};return}
 var h='<div class="fiche"><h1>Examen : '+name+'</h1><div class="tm"><b id="tl"></b><div class="bar"><i id="tb"></i></div></div>';
 Q.forEach(function(k,i){h+='<div class="card q"><h3>Question '+(i+1)+' <span style="color:var(--mute);font-weight:400">(2 pts)</span></h3><p>'+k[0]+'</p>'+k[1].map(function(o,j){return '<label class="opt"><input type="radio" name="q'+i+'" value="'+j+'"'+(X.a[i]===j?' checked':'')+'>'+o+'</label>'}).join('')+'</div>'});
 h+='<div class="card q"><h3>Exercice pratique <span style="color:var(--mute);font-weight:400">(10 pts)</span></h3>'+ex.c+'<textarea id="xe" spellcheck="false" aria-label="Code de l’examen"></textarea><div class="row"><button class="btn" id="xr">Exécuter</button></div><pre id="xo">Résultat de l’exécution.</pre></div><div class="row"><button class="btn g" id="xf">Terminer et corriger</button></div></div>';
 v.innerHTML=h;$("xe").value=X.code;
 [].forEach.call(v.querySelectorAll('input[type=radio]'),function(r){r.onchange=function(){X.a[+r.name.slice(1)]=+r.value}});
 $("xe").oninput=function(){X.code=this.value};
 $("xr").onclick=function(){var r=run($("xe").value,ex);$("xo").textContent=ex.k?'Ce langage est corrigé à la fin de l’examen.':(r.err?'Erreur – '+r.err:(r.logs.join('\n')||'(aucun affichage)'))};
 $("xf").onclick=finish;
 if(xt)clearInterval(xt);
 var tick=function(){if(!X||X.fin||V!=="exam"){clearInterval(xt);xt=null;return}var s=Math.max(0,Math.round((X.end-Date.now())/1000));$("tl").textContent=Math.floor(s/60)+':'+('0'+s%60).slice(-2);$("tb").style.width=(s/900*100)+'%';if(s<=0)finish()};
 tick();xt=setInterval(tick,500);
}
function finish(){
 if(!X||X.fin)return;
 var Q=EXAMQ[X.lang],ex=EX[EX.length-1],q=0,ok=0,tl=[];
 Q.forEach(function(k,i){if(X.a[i]===k[2])q+=2});
 var rr=run(X.code,ex);
 ex.tests.forEach(function(t){var o=false;if(!rr.err){try{o=!!t[1](rr.logs,rr.vars)}catch(e){}}if(o)ok++;tl.push([t[0],o])});
 var p=Math.round(ok/ex.tests.length*10),tot=q+p,b=me.exam[X.lang]||0,xp=false;
 if(tot>=10&&b<10){me.xp+=100;xp=true}
 me.exam[X.lang]=Math.max(b,tot);X.res={q:q,p:p,tot:tot,tl:tl,xp:xp};X.fin=true;sv();V="exam";shell();
}
function runX(code,ex){if(ex.k==="html")return{logs:[],vars:{doc:new DOMParser().parseFromString(code,"text/html")},html:code};return{logs:[],vars:{code:code},pat:1}}
var $=function(i){return document.getElementById(i)};
var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})};
var U={},me=null,V="home",I=0,H=false,R=null,mode="in";
function ld(){try{U=JSON.parse(localStorage.getItem("at_u")||"{}");var s=localStorage.getItem("at_s");me=s&&U[s]?U[s]:null}catch(e){U={};me=null}}
function sv(){try{if(me)U[me.email]=me;localStorage.setItem("at_u",JSON.stringify(U))}catch(e){}}
function hash(s){var h=5381;for(var i=0;i<s.length;i++)h=((h<<5)+h+s.charCodeAt(i))|0;return String(h)}
function nDone(){return Object.keys(me.done).length}
function due(){return CARDS.map(function(c,i){return i}).filter(function(i){return (me.cards[i]||0)<3})}
function mastered(){return CARDS.length-due().length}
function authView(){
 $("app").innerHTML='<div class="auth"><div class="brand"><div><h2 style="font-size:1.3rem">Atelier</h2></div><div><h1>Apprenez le code en le pratiquant.</h1><p style="margin-top:14px">Des exercices corrigés automatiquement, une progression sauvegardée et un mode révision pour retenir ce que vous apprenez.</p></div><div class="snip"><s>const</s> objectif = <s>"développeur full stack"</s>;<br>apprendre(objectif);</div></div>'+
 '<div class="fw"><div class="box"><div class="tabs"><button id="t1" class="'+(mode==="in"?"on":"")+'">Connexion</button><button id="t2" class="'+(mode==="up"?"on":"")+'">Inscription</button></div><form id="fm">'+
 (mode==="up"?'<label for="nm">Nom complet</label><input id="nm" autocomplete="name" required>':'')+
 '<label for="em">Adresse e-mail</label><input id="em" type="email" autocomplete="email" required><label for="pw">Mot de passe</label><input id="pw" type="password" autocomplete="'+(mode==="up"?"new-password":"current-password")+'" required>'+
 (mode==="up"?'<label for="lv">Votre niveau</label><select id="lv"><option>Débutant</option><option>Intermédiaire</option><option>Avancé</option></select><label for="lg2">Langage à étudier</label><select id="lg2">'+Object.keys(LANGS).map(function(k){return '<option value="'+k+'">'+LANGS[k].name+'</option>'}).join("")+'</select>':'')+
 '<div class="err" id="er" role="alert"></div><button class="btn p" style="width:100%;margin-top:6px">'+(mode==="up"?"Créer mon compte":"Se connecter")+'</button></form><p class="note">Version de démonstration : les comptes sont enregistrés uniquement dans ce navigateur. La vraie plateforme utilisera un serveur et une base de données.</p></div></div></div>';
 $("t1").onclick=function(){mode="in";authView()};$("t2").onclick=function(){mode="up";authView()};
 $("fm").onsubmit=function(e){e.preventDefault();var em=$("em").value.trim().toLowerCase(),pw=$("pw").value,er=$("er");
  if(mode==="up"){if(pw.length<6){er.textContent="Le mot de passe doit contenir au moins 6 caractères.";return}
   if(U[em]){er.textContent="Cette adresse e-mail est déjà inscrite. Connectez-vous.";return}
   me={name:$("nm").value.trim(),email:em,pw:hash(pw),level:$("lv").value,lang:$("lg2").value,xp:0,done:{},cards:{}};sv()}
  else{if(!U[em]||U[em].pw!==hash(pw)){er.textContent="E-mail ou mot de passe incorrect.";return}me=U[em]}
  try{localStorage.setItem("at_s",em)}catch(x){}setLang(me.lang||"js");V="home";shell()}
}
function shell(){
 if(!me){authView();return}
 var n=function(k,l){return '<button data-v="'+k+'" class="'+(V===k?"on":"")+'">'+l+'</button>'};
 $("app").innerHTML='<div class="top"><b>Atelier</b>'+n("home","Accueil")+n("cours","Cours")+n("ex","Exercices")+n("rev","Réviser")+n("exam","Examen")+'<select id="lg" aria-label="Langage" style="width:auto;padding:5px 8px;background:rgba(255,255,255,.12);color:#fff;border-color:transparent">'+Object.keys(LANGS).map(function(k){return '<option style="color:#000" value="'+k+'"'+(k===me.lang?" selected":"")+'>'+LANGS[k].name+'</option>'}).join("")+'</select><span class="sp"></span><span class="xp">'+me.xp+' XP</span><button id="lo">Déconnexion</button></div><div class="wrap" id="v"></div>';
 [].forEach.call(document.querySelectorAll(".top [data-v]"),function(b){b.onclick=function(){V=b.dataset.v;if(V==="rev")R=null;shell()}});
 $("lo").onclick=function(){try{localStorage.removeItem("at_s")}catch(e){}me=null;mode="in";authView()};
 $("lg").onchange=function(){setLang(this.value);sv();V="home";shell()};
 ({home:home,cours:coursView,exam:examView,ex:exView,rev:revView})[V]();
}
function home(){
 var d=nDone(),p=Math.round(d/EX.length*100),q=due().length;
 $("v").innerHTML='<h1 style="font-size:2rem">Bonjour, '+esc(me.name.split(" ")[0])+'</h1><p style="color:var(--mute);margin:4px 0 0">Niveau : '+esc(me.level)+'</p>'+
 '<div class="stats"><div class="st"><b>'+me.xp+'</b><span>points XP</span></div><div class="st"><b>'+d+'/'+EX.length+'</b><span>exercices réussis</span></div><div class="st"><b>'+mastered()+'/'+CARDS.length+'</b><span>notions maîtrisées</span></div></div>'+
 '<h3 style="margin:0 0 8px">Que voulez-vous apprendre ?</h3><div class="pills" id="lp">'+Object.keys(LANGS).map(function(k){return '<button data-l="'+k+'" class="'+(k===me.lang?"on":"")+'">'+LANGS[k].name+'</button>'}).join("")+'</div><div class="cards"><div class="card"><h2>'+LANGS[me.lang].name+' : les bases</h2><p>'+LANGS[me.lang].desc+'</p><div class="bar"><i style="width:'+p+'%"></i></div><button class="btn p" id="go">'+(d?"Continuer":"Commencer")+'</button></div>'+
 '<div class="card due"><h2>À réviser</h2><p>'+(q?q+" notion"+(q>1?"s":"")+" à revoir aujourd'hui.":"Tout est maîtrisé pour le moment.")+'</p><button class="btn p" id="gr">'+(q?"Réviser maintenant":"Revoir les cartes")+'</button></div></div>';
 $("go").onclick=function(){if(!nDone()){V="cours";shell();return}var k=0;for(var i=0;i<EX.length;i++){if(!me.done[i]){k=i;break}}I=k;V="ex";shell()};
 $("gr").onclick=function(){V="rev";R=null;shell()};
 [].forEach.call($("lp").querySelectorAll("button"),function(b){b.onclick=function(){setLang(b.dataset.l);sv();shell()}});
}
function run(code,ex){
 if(ex.k)return runX(code,ex);
 var logs=[],con={log:function(){logs.push([].slice.call(arguments).map(function(a){return typeof a==="object"?JSON.stringify(a):String(a)}).join(" "))}};
 var names=ex.vars.map(function(n){return n+":(typeof "+n+'!=="undefined"?'+n+":undefined)"}).join(",");
 try{return{logs:logs,vars:new Function("console",code+"\n;return {"+names+"};")(con)}}catch(e){return{logs:logs,err:e.name+" : "+e.message}}
}
function exView(){
 var ex=EX[I];H=false;
 var pills=EX.map(function(e,i){return '<button data-i="'+i+'" class="'+(i===I?"on ":"")+(me.done[i]?"d":"")+'">'+(i+1)+". "+e.t+"</button>"}).join("");
 $("v").innerHTML='<h1>'+ex.ch+'</h1><div class="pills">'+pills+'</div><div class="ex"><section class="card"><h2 style="margin-bottom:8px">'+ex.t+'</h2>'+ex.c+'</section><section><textarea id="ed" spellcheck="false" aria-label="Éditeur de code"></textarea><div class="row"><button class="btn p" id="run">Exécuter</button><button class="btn p" id="sub">Valider</button><button class="btn" id="hb">Indice</button><button class="btn" id="sb">Solution</button><button class="btn" id="fc2">Fiche de cours</button><button class="btn g" id="nx" hidden>Exercice suivant</button></div><div class="lab">Console</div><pre id="out">Cliquez sur « Exécuter » pour voir le résultat.</pre><div id="res"></div><div id="hint"></div></section></div>';
 $("ed").value=ex.start;
 [].forEach.call(document.querySelectorAll(".pills button"),function(b){b.onclick=function(){I=+b.dataset.i;exView()}});
 var show=function(r){if(r.html!==undefined){var o=$("out");o.textContent="";var f=document.createElement("iframe");f.setAttribute("sandbox","");f.title="Aperçu";f.style.cssText="width:100%;height:150px;border:0;background:#fff;border-radius:6px";f.srcdoc=r.html;o.appendChild(f);return}if(r.pat){$("out").textContent="Ce langage est corrigé par analyse du code, sans exécution. Cliquez sur « Valider ».";return}$("out").textContent=r.err?"Erreur – "+r.err:(r.logs.join("\n")||"(aucun affichage)")};
 $("run").onclick=function(){show(run($("ed").value,ex))};
 $("sub").onclick=function(){var r=run($("ed").value,ex),h="",all=!r.err;show(r);
  ex.tests.forEach(function(t){var ok=false;if(!r.err){try{ok=!!t[1](r.logs,r.vars)}catch(e){}}if(!ok)all=false;h+='<div class="t '+(ok?"ok":"ko")+'">'+(ok?"✓ ":"✗ ")+t[0]+"</div>"});
  if(all){if(!me.done[I]){var g=H?50:100;me.xp+=g;me.done[I]=1;sv();h+='<div class="msg ok">Bravo ! +'+g+" XP</div>"}else h+='<div class="msg ok">Correct (déjà validé).</div>';
   if(I<EX.length-1)$("nx").hidden=false;else h+='<div class="msg ok">Vous avez terminé tous les exercices.</div>';
   var tp=document.querySelector(".top .xp");if(tp)tp.textContent=me.xp+" XP";$("res").innerHTML=h;document.querySelectorAll(".pills button")[I].classList.add("d")}
  else{h+='<div class="msg ko">Pas encore. Relisez la consigne et réessayez.</div>';$("res").innerHTML=h}};
 $("hb").onclick=function(){H=true;$("hint").innerHTML='<div class="hint">'+esc(ex.hint)+"</div>"};
 $("sb").onclick=function(){H=true;$("ed").value=ex.sol};
 $("fc2").onclick=function(){V="cours";shell()};
 $("nx").onclick=function(){I++;exView()};
 $("ed").addEventListener("keydown",function(e){if(e.key==="Tab"){e.preventDefault();var s=this.selectionStart;this.value=this.value.slice(0,s)+"  "+this.value.slice(this.selectionEnd);this.selectionStart=this.selectionEnd=s+2}});
}
function revView(){
 if(!R){var q=due();q.sort(function(a,b){return (me.cards[a]||0)-(me.cards[b]||0)});R={q:q,i:0,s:false,k:0}}
 var v=$("v");
 if(R.i>=R.q.length){v.innerHTML='<div class="card empty"><h2>'+(R.q.length?"Séance terminée":"Rien à réviser")+'</h2><p>'+(R.q.length?R.k+" notion"+(R.k>1?"s":"")+" maîtrisée"+(R.k>1?"s":"")+" sur "+R.q.length+" révisée"+(R.q.length>1?"s":"")+".":"Toutes les notions sont maîtrisées. Bravo !")+'</p><button class="btn p" id="bk">Retour à l\'accueil</button> <button class="btn" id="rs">Tout réviser à nouveau</button></div>';
  $("bk").onclick=function(){V="home";shell()};$("rs").onclick=function(){me.cards={};sv();R=null;revView()};return}
 var id=R.q[R.i],c=CARDS[id],bx=me.cards[id]||0;
 v.innerHTML='<h1>Révision</h1><p class="cnt">Carte '+(R.i+1)+' sur '+R.q.length+'</p><div class="card fc"><div class="boxes" title="Niveau de maîtrise">'+[0,1,2].map(function(i){return '<i class="'+(i<bx?"f":"")+'"></i>'}).join("")+'</div><h2>'+c[0]+'</h2>'+(R.s?'<div class="a">'+c[1]+'</div><div class="row" style="justify-content:center"><button class="btn k" id="no">À revoir</button><button class="btn g" id="yes">Je savais</button></div>':'<div><button class="btn p" id="sh">Voir la réponse</button></div>')+'</div>';
 if(!R.s){$("sh").onclick=function(){R.s=true;revView()};return}
 var nx=function(ok){me.cards[id]=ok?Math.min(3,bx+1):0;if(ok&&me.cards[id]>=3)R.k++;sv();R.i++;R.s=false;revView()};
 $("yes").onclick=function(){nx(true)};$("no").onclick=function(){nx(false)};
}
ld();if(me)setLang(me.lang||"js");shell();
