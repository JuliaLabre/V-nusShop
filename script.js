
/**
 * resize() → Aplicativo que ajusta o menu dropdown conforme a resolução 
 * (width) da viewport. Temos em "index.html" 3 elementos a serem controlados:
 *     • Os itens do menu normal, com a classe ".dropable";
 *     • O botão que controla o menu, com id "#btnMenu";
 *     • O menu dropdown em sí, com o id "#dropable".
 */
// Ajusta o menu dropdown:
function resize() {

    // jQuery → Oculta o menu:
    $('#dropable').hide('fast');
  
    // Se a largura da tela é maior que 574px...
    if (window.innerWidth > 574) {
  
      // jQuery → Oculta o botão do menu:
      $('#btnMenu').hide(0);
  
      // jQuery → Mostra o menu normal:
      $('.dropable').show(0);
  
      // Se não...
    } else {
  
      // jQuery → Oculta o menu normal:
      $('.dropable').hide(0);
  
      // jQuery → Mostra o botão do menu:
      $('#btnMenu').show(0);
  
    }
  }
  
  /**
   * toggleMenu() → Aplicativo que controla a exibição do menu dropdown.
   */
  function toggleMenu() {
  
    // jQuery → Se o menu está visível...
    if ($('#dropable').is(":visible")) {
  
      // Chama a função que oculta o menu:
      hideMenu();
  
      // Se não...
    } else {
  
      // Chama a função que mostra o menu:
      showMenu();
    }
  }
  
  /**
   * hideMenu() → Aplicativo que oculta o menu dropdown e também aplica o efeito
   * de animação no ícone do botão de menu. A classe "fa-rotate-90" que gira o 
   * ícone, faz parte da biblioteca "Font Awesome". Referências:
   *     https://fontawesome.com/docs/web/style/rotate
   */
  function hideMenu() {
  
    // jQuery → Oculta o menu:
    $('#dropable').hide('fast');
  
    // jQuery → Remove rotação do ícone do botão do menu:
    $('#btnMenu i').removeClass('fa-rotate-90');
  }
  
  /**
   * showMenu() → Aplicativo que mostra o menu dropdown e também aplica o efeito
   * de animação no ícone do botão de menu. 
   */
  function showMenu() {
  
    // jQuery → Mostra o menu:
    $('#dropable').show('fast');
  
    // jQuery → Rotaciona o ícone do botão do menu:
    $('#btnMenu i').addClass('fa-rotate-90');
  }
  
  /**
   * Menu de navegação complementar da seção "Sobre...", em HTML.
   * 
   * Como temos várias páginas nessa seção, não é necessário ficar repetindo o
   * trecho de código abaixo para mostrar o menu em cada página, basta exibir o 
   * valor da variável "aboutMenu" no elemento desejado.
   */
  var aboutMenu = `
  <a href="site"><i class="fa-solid fa-globe fa-fw"></i><span>Sobre o site</span></a>
  <a href="team"><i class="fa-solid fa-users fa-fw"></i><span>Quem somos</span></a>
  <a href="policies"><i class="fa-solid fa-user-lock fa-fw"></i><span>Sua privacidade</span></a>
  <a href="contacts"><i class="fa-solid fa-comments fa-fw"></i><span>Contatos</span></a>
  `;