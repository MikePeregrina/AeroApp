/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `` | `/` | `/(drawer)` | `/(tabs)` | `/Accordion` | `/Home` | `/MisClases` | `/Perfil` | `/_sitemap` | `/components/Menu/DrawerLayout` | `/components/Menu/MenuComponent` | `/components/Menu/MenuDeslizable` | `/components/TabBar/ColorList` | `/components/TabBar/Icons` | `/components/TabBar/TabBar` | `/components/TabBar/TabBarButton` | `/components/carrusel/Card` | `/components/carrusel/CardCursosMentor` | `/components/carrusel/Carrusel` | `/components/carrusel/SkeletonCard` | `/components/compraCurso/CardMentor` | `/components/compraCurso/CarouselSelector` | `/components/compraCurso/CarruselMateriasMentor` | `/components/compraCurso/CustomToast` | `/components/compraCurso/Loading` | `/components/compraCurso/ModalConfirmacion` | `/components/compraCurso/PaymentModal` | `/components/compraCurso/Select` | `/components/cursos/ImagesRoad` | `/components/home/Buttons` | `/components/home/GridPosition` | `/components/home/ModalLogin` | `/components/home/RecommendRoutes` | `/components/home/SearchInput` | `/components/home/ShowResults` | `/components/home/Welcome` | `/components/home/themeHome` | `/components/login/Background` | `/components/login/Button` | `/components/login/Header` | `/components/login/Logo` | `/components/login/MultiSelectCheckbox` | `/components/login/MultiSelectComponent` | `/components/login/Paragraph` | `/components/login/TextInput` | `/components/login/ValidationSchema` | `/components/login/theme` | `/components/perfil/Menu` | `/components/perfil/TextwithNBorder` | `/screen/comprarcurso/HomeCursoSreen` | `/screen/comprarcurso/MuestraMentor` | `/screen/comprarcurso/ObjetivoUsuario` | `/screen/login/LoginScreen` | `/screen/login/RegisterScreen` | `/screen/login/RegisterScreen2` | `/screen/login/ResetPasswordScreen` | `/screen/loginMentor/Disponibilidad` | `/screen/loginMentor/LoginScreenMentor` | `/screen/loginMentor/ModalCrear` | `/screen/loginMentor/ModalEditar` | `/screen/vercursomaster/RutaAprendizaje` | `/screen/vercursomaster/VerCursos` | `/screen/vercursomaster/VerMasters` | `/screen/vercursomaster/VerPerfilMaster` | `/services/API` | `/utils/cursosTipo` | `/utils/groupMentorSchedules` | `/utils/shared` | `/utils/toastUtils`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
