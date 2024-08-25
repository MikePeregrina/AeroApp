/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `` | `/` | `/(tabs)` | `/Home` | `/MisClases` | `/Perfil` | `/_sitemap` | `/components/CustomModal` | `/components/Menu/DrawerLayout` | `/components/Menu/MenuComponent` | `/components/Menu/MenuDeslizable` | `/components/calendario/Calendario` | `/components/calendario/FormatoDefechas` | `/components/carrusel/Card` | `/components/carrusel/Carrusel` | `/components/carrusel/SkeletonCard` | `/components/compraCurso/CardMentor` | `/components/compraCurso/CarouselSelector` | `/components/compraCurso/CarruselMateriasMentor` | `/components/compraCurso/Loading` | `/components/compraCurso/ModalConfirmacion` | `/components/compraCurso/Select` | `/components/home/Buttons` | `/components/home/ModalLogin` | `/components/home/RecommendRoutes` | `/components/home/SearchInput` | `/components/home/ShowResults` | `/components/home/Welcome` | `/components/home/themeHome` | `/components/login/Background` | `/components/login/Button` | `/components/login/Header` | `/components/login/Logo` | `/components/login/MultiSelectCheckbox` | `/components/login/MultiSelectComponent` | `/components/login/Paragraph` | `/components/login/TextInput` | `/components/login/ValidationSchema` | `/components/login/theme` | `/components/perfil/Menu` | `/components/perfil/TextwithNBorder` | `/screen/comprarcurso/AgendarCurso` | `/screen/comprarcurso/HomeCursoSreen` | `/screen/comprarcurso/MuestraMentor` | `/screen/comprarcurso/ObjetivoUsuario` | `/screen/comprarcurso/SelectFecha` | `/screen/login/LoginScreen` | `/screen/login/RegisterScreen` | `/screen/login/RegisterScreen2` | `/screen/login/ResetPasswordScreen` | `/screen/loginMentor/Disponibilidad` | `/screen/loginMentor/LoginScreenMentor` | `/screen/vercursomaster/VerCursos` | `/screen/vercursomaster/VerMasters` | `/screen/vercursomaster/VerPerfilMaster` | `/services/API` | `/utils/groupMentorSchedules` | `/utils/shared` | `/utils/toastUtils`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
