$(document).ready(function() {


  //MOBILE
  var triggerWebinfo = document.getElementById('button-mobile');
  triggerWebinfo.addEventListener('click', offInfo);

  //MENU
  var triggerMenu = document.getElementById('menu-top');
  triggerMenu.addEventListener('click', toggleMenu);

  var triggerOffMenu = document.getElementById('arrow-back');
  triggerOffMenu.addEventListener('click', toggleMenu);

  //BLOC1
  var triggerNew = document.getElementById('bloc1');
  triggerNew.addEventListener('click', toggleMain);

  //REPLY
  var reply = document.getElementById('reply-wrapper');
  reply.addEventListener('click', toggleReply);

  //SEARCH
  var triggerSearch1 = document.getElementById('bloc3');
  triggerSearch1.addEventListener('click', toggleSearch);

  var triggerSearch2 = document.getElementById('search-wrapper');
  triggerSearch2.addEventListener('click', toggleSearch);

  //ACTION BIG BUTTON
  var markSnooze = document.getElementById('action-snooze');
  markSnooze.addEventListener('click', toggleSnooze);

  var markRead = document.getElementById('action-read');
  markRead.addEventListener('click', toggleRead);

  var markDelete = document.getElementById('action-delete');
  markDelete.addEventListener('click', toggleDelete);

  var markArchive = document.getElementById('action-archive');
  markArchive.addEventListener('click', toggleArchive);

  //ACTION FOOTER BUTTON
  var markSnoozeFooter = document.getElementById('action-footer-snooze');
  markSnoozeFooter.addEventListener('click', toggleSnoozeFooter);

  var markReadFooter = document.getElementById('action-footer-read');
  markReadFooter.addEventListener('click', toggleReadFooter);

  var markArchiveFooter = document.getElementById('action-footer-archive');
  markArchiveFooter.addEventListener('click', toggleArchiveFooter);

  var markDeleteFooter = document.getElementById('action-footer-delete');
  markDeleteFooter.addEventListener('click', toggleDeleteFooter);

  //WRITE EMAIL
  var writeEmail = document.getElementById('write-icon');
  writeEmail.addEventListener('click', toggleWriting);

  var writeEmailOff = document.getElementById('write-panel');
  writeEmailOff.addEventListener('click', toggleWriting);

  var lockApp = document.getElementById('lock-mail');
  lockApp.addEventListener('click', toggleLock);


  //FUNCTIONS
  var clicks = 0;
  var lock = 0;
  var snoozeOn = false;
  var readOn = false;

  function offInfo() {
    $(".web-info").toggleClass("hide");
  }

  function toggleMenu() {
    $(".menu-wrapper").toggleClass("menu-wrapper-on");
    $('.menu-wrapper').find('li').toggleClass("menu-li-on")
  }

  function toggleWriting() {
    $(".write-wrapper").toggleClass("menu-wrapper-on");
  }

  function toggleLock() {
    $(".lock-on").addClass("lock-on-animate");
    $(".lock-progress").addClass("lock-progress-animate");
    setTimeout(function() {
      $(".lock-on").removeClass('lock-on-animate')
      $(".lock-progress").removeClass('lock-progress-animate')
    }, 22000);
  }



  function toggleMain() {
    if (snoozeOn) {
      $("#bloc1").toggleClass("snooze");
      toggleNew();
      snoozeOn = false;
    } else if (readOn) {
      $("#bloc1").toggleClass("read");
      toggleNew();
      readOn = false;
    } else {
      toggleNew();
    }
  }

  function toggleNew() {
    if (clicks == 0) {
      toggleP1();
      ++clicks;
    } else if (clicks == 1) {
      toggleP2();
      ++clicks;
    } else if (clicks == 2) {
      // toggleP3();
      // clicks = 0;
      replyIsOn();
      // ++clicks;
    }
    console.log("this is " + clicks);
  }

  function replyIsOn() {
    $("#reply-wrapper").toggleClass("reply-wrapper-on");
    $("#ic-reply").toggleClass("reply-anim");
    $("#ic-reply-all").toggleClass("reply-anim");
    $("#ic-forward").toggleClass("reply-anim-2");
  }

  function toggleReply() {
    replyIsOn();
    toggleP3();
    clicks = 0;
  }

  function toggleSearch() {
    $("#search-wrapper").toggleClass("search-on");
  }

  function toggleP1() {
    $(".body-container").toggleClass("body-container-full");
    $("#bloc1").toggleClass("new-on");
    $(".header").toggleClass("header-new-on");
    $("#date1").toggleClass("new");
    $(".arrow-down").toggleClass("show");
    $(".action").toggleClass("show");
    $("#action-snooze, #action-read, #action-delete, #action-archive").addClass("anim-action");
    $("#bloc2, #bloc3, #bloc4, #bloc5, #bloc6, #bloc7, #bloc8").toggleClass("hide");
    $(".footer-icon-wrapper").toggleClass("hide");
    $(".m-footer").toggleClass("hide");


    //for Header // REVIEW //
    $(".header").removeClass("header-archive-on");
    $(".header").removeClass("header-delete-on");
  }

  function toggleP2() {
    $(".body-container").toggleClass("body-container-full");
    $(".m-footer").toggleClass("hide");

    $("#bloc1").toggleClass("new-full");
    $("#txt-mail-1").toggleClass("off-line-clamp");
    $(".arrow-down").toggleClass("show");
    $("#date1").toggleClass("date-full");
    $(".sender-name").toggleClass("sender-name-full");
    $(".subject").toggleClass("subject-full");
    $(".action").toggleClass("show");
    $("#action-snooze, #action-read, #action-delete, #action-archive").removeClass("anim-action");
    $(".recipients").toggleClass("show");
    $(".mail-bloc").toggleClass("mail-bloc-full");
    $(".footer-action-wrapper").toggleClass("hide");
    $("#write-mail").toggleClass("hide");

  }

  function toggleP3() {
    $("#bloc1").toggleClass("new-full new-on");
    $("#txt-mail-1").toggleClass("off-line-clamp");
    $(".header").toggleClass("header-new-on");
    $(".arrow-down").removeClass("show");
    $("#date1").toggleClass("date-full");
    $("#date1").toggleClass("new");
    $(".sender-name").toggleClass("sender-name-full");
    $(".subject").toggleClass("subject-full");
    $("#bloc2, #bloc3, #bloc4, #bloc5, #bloc6, #bloc7,#bloc8").toggleClass("hide");
    $(".recipients").toggleClass("show");
    $(".mail-bloc").toggleClass("mail-bloc-full");
    $(".footer-icon-wrapper").toggleClass("hide");
    $(".footer-action-wrapper").toggleClass("hide");
    $("#write-mail").toggleClass("hide");


    //for Header // REVIEW //
    $(".header").removeClass("header-archive-on");
    $(".header").removeClass("header-delete-on");

  }

  function blocOff() {
    $("#bloc1").toggleClass("hide");
  }

  function archiveOn() {
    $(".mail-to-archive").toggleClass("show");
  }

  function deleteOn() {
    $(".mail-to-delete").toggleClass("show");
  }

  function toggleArchive() {
    $(".header").addClass("header-archive-on");
    archiveOn();
    toggleArchiveDelete();
  }

  function toggleArchiveFooter() {
    $(".header").addClass("header-archive-on");
    archiveOn();
    toggleArchiveDeleteFooter();
  }

  function toggleDelete() {
    $(".header").addClass("header-delete-on");
    deleteOn();
    toggleArchiveDelete();
  }

  function toggleDeleteFooter() {
    $(".header").addClass("header-delete-on");
    deleteOn();
    toggleArchiveDeleteFooter();
  }

  function mailTrans() {
    $(".action-arch-delete").toggleClass("show");
    $(".action-arch-delete").toggleClass("trans-action");
  }

  function transOff() {
    $(".action-arch-delete").toggleClass("show");
  }

  function mailtoArchive() {
    $(".action-arch-delete").toggleClass("show");
  }


  function toggleSnooze() {
    toggleP1();
    $("#bloc1").toggleClass("snooze");
    snoozeOn = true;
    clicks = 0;
  }

  function toggleSnoozeFooter() {
    toggleP3();
    $("#bloc1").toggleClass("snooze");
    snoozeOn = true;
    clicks = 0;
  }

  function toggleRead() {
    toggleP1();
    $("#bloc1").toggleClass("read");
    readOn = true;
    clicks = 0;
  }

  function toggleReadFooter() {
    toggleP3();
    $("#bloc1").toggleClass("read");
    readOn = true;
    clicks = 0;
  }


  function toggleArchiveDelete() {
    mailTrans();
    setTimeout(toggleP1, 720);
    setTimeout(blocOff, 600);
    clicks = 0;
    setTimeout(transOff, 1200);
  }

  function toggleArchiveDeleteFooter() {
    mailTrans();
    setTimeout(toggleP3, 720);
    setTimeout(blocOff, 600);
    clicks = 0;
    setTimeout(transOff, 1200);
  }



});

// TRASH:
