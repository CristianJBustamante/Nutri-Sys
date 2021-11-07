USE [master]
GO
/****** Object:  Database [NUTRI-SYS]    Script Date: 21/6/2021 12:18:15 ******/
CREATE DATABASE [NUTRI-SYS]
GO

USE [NUTRI-SYS]
GO
/****** Object:  Table [dbo].[agenda]    Script Date: 10/7/2021 00:42:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[agenda](
	[agen_id] [int] IDENTITY(1,1) NOT NULL,
	[agen_legajoempleado] [int] NOT NULL,
	[agen_fechainicio] [datetime] NOT NULL,
	[agen_fechafin] [datetime] NULL,
 CONSTRAINT [PK_Agenda] PRIMARY KEY CLUSTERED 
(
	[agen_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[alimentos_plan]    Script Date: 10/7/2021 00:42:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[alimentos_plan](
	[aplan_id] [int] NOT NULL,
	[aplan_linea] [int] NOT NULL,
	[aplan_alimento] [nvarchar](max) NOT NULL,
	[aplan_observaciones] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Alimentos_plan_alimentario] PRIMARY KEY CLUSTERED 
(
	[aplan_id] ASC,
	[aplan_linea] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[anamnesis_paciente]    Script Date: 10/7/2021 00:42:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[anamnesis_paciente](
	[anms_id] [int] NOT NULL,
	[anms_nrohc] [int] NOT NULL,
	[anms_fecharegistro] [datetime] NOT NULL,
	[anms_observaciones] [nvarchar](max) NULL,
 CONSTRAINT [PK_Anamnesis_alimentaria_1] PRIMARY KEY CLUSTERED 
(
	[anms_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[automonitoreo_paciente]    Script Date: 10/7/2021 00:42:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[automonitoreo_paciente](
	[am_id] [int] IDENTITY(1,1) NOT NULL,
	[am_nrohc] [int] NOT NULL,
	[am_fecharegistro] [datetime] NOT NULL,
	[am_actividadfisica] [nvarchar](max) NULL,
	[am_primeraconsulta] [bit] NOT NULL,
	[am_observaciones] [nvarchar](max) NULL,
 CONSTRAINT [PK_Automonitoreo_paciente] PRIMARY KEY CLUSTERED 
(
	[am_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[consulta]    Script Date: 10/7/2021 00:42:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[consulta](
	[cons_id] [int] IDENTITY(1,1) NOT NULL,
	[cons_idturno] [int] NOT NULL,
	[cons_observaciones] [nvarchar](max) NULL,
 CONSTRAINT [PK_Consulta] PRIMARY KEY CLUSTERED 
(
	[cons_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[detalle_anamnesis]    Script Date: 10/7/2021 00:42:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[detalle_anamnesis](
	[danms_id] [int] NOT NULL,
	[danms_linea] [int] NOT NULL,
	[danms_iditem] [int] NOT NULL,
	[danms_consumido] [bit] NOT NULL,
	[danms_cantidad] [numeric](18, 2) NULL,
	[danms_observaciones] [nvarchar](max) NULL,
 CONSTRAINT [PK_Detalle_anamnesis_alimentaria] PRIMARY KEY CLUSTERED 
(
	[danms_id] ASC,
	[danms_linea] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[detalle_automonitoreo]    Script Date: 10/7/2021 00:42:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[detalle_automonitoreo](
	[dam_id] [int] NOT NULL,
	[dam_idmomentodia] [int] NOT NULL,
	[dam_comida] [nvarchar](50) NOT NULL,
	[dam_cantidad] [nvarchar](50) NOT NULL,
	[dam_descomida] [nvarchar](max) NULL,
	[dam_extras] [nvarchar](max) NULL,
 CONSTRAINT [PK_detalle_automonitoreo] PRIMARY KEY CLUSTERED 
(
	[dam_id] ASC,
	[dam_idmomentodia] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[detalle_habitos]    Script Date: 10/7/2021 00:42:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[detalle_habitos](
	[dhabpac_id] [int] NOT NULL,
	[dhabpac_linea] [int] NOT NULL,
	[dhabpac_idhabito] [int] NOT NULL,
	[dhabpac_realiza] [bit] NOT NULL,
	[dhabpac_observaciones] [nvarchar](max) NULL,
 CONSTRAINT [PK_Detalle_habitos_paciente] PRIMARY KEY CLUSTERED 
(
	[dhabpac_id] ASC,
	[dhabpac_linea] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[detalle_medidas]    Script Date: 10/7/2021 00:42:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[detalle_medidas](
	[dmedpac_id] [int] NOT NULL,
	[dmedpac_linea] [int] NOT NULL,
	[dmedpac_idmedida] [int] NOT NULL,
	[dmedpac_valor] [numeric](18, 2) NOT NULL,
	[dmedpac_observaciones] [nvarchar](max) NULL,
 CONSTRAINT [PK_Detalle_Medida_Paciente] PRIMARY KEY CLUSTERED 
(
	[dmedpac_id] ASC,
	[dmedpac_linea] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[distribucion_plan]    Script Date: 10/7/2021 00:42:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[distribucion_plan](
	[dplan_id] [int] NOT NULL,
	[dplan_linea] [int] NOT NULL,
	[dplan_idmomentodia] [nvarchar](50) NOT NULL,
	[dplan_opcion] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Distribucion_plan_alimentario] PRIMARY KEY CLUSTERED 
(
	[dplan_id] ASC,
	[dplan_linea] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[empleado]    Script Date: 10/7/2021 00:42:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[empleado](
	[emp_legajo] [int] NOT NULL,
	[emp_idusuario] [int] NULL,
	[emp_tipodoc] [nvarchar](50) NOT NULL,
	[emp_nrodoc] [numeric](18, 0) NOT NULL,
	[emp_apellido] [nvarchar](50) NOT NULL,
	[emp_nombre] [nvarchar](50) NOT NULL,
	[emp_matricula] [nvarchar](50) NULL,
	[emp_direccion] [nvarchar](50) NULL,
	[emp_telefono1] [nvarchar](50) NULL,
	[emp_telefono2] [nvarchar](50) NULL,
 CONSTRAINT [PK_Empleado] PRIMARY KEY CLUSTERED 
(
	[emp_legajo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[estado_turno]    Script Date: 10/7/2021 00:42:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[estado_turno](
	[estadoturno_id] [int] IDENTITY(1,1) NOT NULL,
	[estadoturno_descripcion] [nvarchar](50) NULL,
 CONSTRAINT [PK_Estado_turno] PRIMARY KEY CLUSTERED 
(
	[estadoturno_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[habito]    Script Date: 10/7/2021 00:42:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[habito](
	[hab_id] [int] IDENTITY(1,1) NOT NULL,
	[hab_descripcion] [nvarchar](max) NULL,
 CONSTRAINT [PK_Habito] PRIMARY KEY CLUSTERED 
(
	[hab_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[habitos_paciente]    Script Date: 10/7/2021 00:42:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[habitos_paciente](
	[habpac_id] [int] NOT NULL,
	[habpac_nrohc] [int] NOT NULL,
	[habpac_fecharegistro] [datetime] NOT NULL,
	[habpac_observaciones] [nvarchar](max) NULL,
	[habpac_idconsulta] [int] NOT NULL,
 CONSTRAINT [PK_Habitos_Paciente] PRIMARY KEY CLUSTERED 
(
	[habpac_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[historia_clinica]    Script Date: 10/7/2021 00:42:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[historia_clinica](
	[hc_nrohc] [int] NOT NULL,
	[hc_derivacionmedica] [nvarchar](max) NULL,
	[hc_diagnostico] [nvarchar](max) NULL,
	[hc_antecedentes] [nvarchar](max) NULL,
	[hc_medicacion] [nvarchar](max) NULL,
	[hc_ocupacion] [nvarchar](max) NULL,
	[hc_actividadfisica] [nvarchar](max) NULL,
	[hc_tratamientos] [nvarchar](max) NULL,
	[hc_laboratorios] [nvarchar](max) NULL,
 CONSTRAINT [PK_Historia_clinica] PRIMARY KEY CLUSTERED 
(
	[hc_nrohc] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[item_anamnesis]    Script Date: 10/7/2021 00:42:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[item_anamnesis](
	[item_id] [int] IDENTITY(1,1) NOT NULL,
	[item_descripcion] [nvarchar](50) NULL,
 CONSTRAINT [PK_Item_anamnesis_alimentaria] PRIMARY KEY CLUSTERED 
(
	[item_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[medida]    Script Date: 10/7/2021 00:42:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[medida](
	[medida_id] [int] IDENTITY(1,1) NOT NULL,
	[medida_descripcion] [nvarchar](50) NULL,
	[medida_unidad] [nvarchar](50) NULL,
 CONSTRAINT [PK_Medida] PRIMARY KEY CLUSTERED 
(
	[medida_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[medidas_paciente]    Script Date: 10/7/2021 00:42:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[medidas_paciente](
	[medpac_id] [int] IDENTITY(1,1) NOT NULL,
	[medpac_nrohc] [int] NOT NULL,
	[medpac_fecharegistro] [datetime] NOT NULL,
	[medpac_idconsulta] [int] NULL,
	[medpac_observaciones] [nvarchar](max) NULL,
 CONSTRAINT [PK_Medida_Paciente_1] PRIMARY KEY CLUSTERED 
(
	[medpac_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[momento_dia]    Script Date: 10/7/2021 00:42:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[momento_dia](
	[momdia_id] [int] IDENTITY(1,1) NOT NULL,
	[momdia_descripcion] [nvarchar](50) NULL,
 CONSTRAINT [PK_momento_dia] PRIMARY KEY CLUSTERED 
(
	[momdia_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[mutual]    Script Date: 10/7/2021 00:42:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[mutual](
	[mut_id] [int] IDENTITY(1,1) NOT NULL,
	[mut_descripcion] [nvarchar](50) NULL,
 CONSTRAINT [PK_Mutual] PRIMARY KEY CLUSTERED 
(
	[mut_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[paciente]    Script Date: 10/7/2021 00:42:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[paciente](
	[pac_nrohc] [numeric](18, 0) IDENTITY(1000,1) NOT NULL,
	[pac_idusuario] [int] NULL,
	[pac_tipodoc] [nvarchar](50) NOT NULL,
	[pac_nrodoc] [numeric](10, 0) NOT NULL,
	[pac_apellido] [nvarchar](50) NOT NULL,
	[pac_nombre] [nvarchar](50) NOT NULL,
	[pac_fechanacimiento] [datetime] NULL,
	[pac_fechaalta] [datetime] NULL,
	[pac_direccion] [nvarchar](max) NULL,
	[pac_telefono1] [nvarchar](50) NULL,
	[pac_telefono2] [nvarchar](50) NULL,
	[pac_correo] [nvarchar](50) NULL,
	[pac_idmutual] [int] NULL,
 CONSTRAINT [PK_Paciente] PRIMARY KEY CLUSTERED 
(
	[pac_nrohc] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[perfil]    Script Date: 10/7/2021 00:42:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[perfil](
	[perfil_id] [int] IDENTITY(1,1) NOT NULL,
	[perfil_descripcion] [nvarchar](50) NULL,
 CONSTRAINT [PK_Perfil] PRIMARY KEY CLUSTERED 
(
	[perfil_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[permiso]    Script Date: 10/7/2021 00:42:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[permiso](
	[permiso_id] [int] NOT NULL,
	[permiso_idperfil] [int] NOT NULL,
	[permiso_descripcion] [nvarchar](50) NULL,
 CONSTRAINT [PK_Permiso] PRIMARY KEY CLUSTERED 
(
	[permiso_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[plan_alimentario]    Script Date: 10/7/2021 00:42:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[plan_alimentario](
	[plan_id] [int] NOT NULL,
	[plan_etapa] [int] NULL,
	[plan_nrohc] [int] NOT NULL,
	[plan_fechainicio] [datetime] NOT NULL,
	[plan_fechafin] [datetime] NULL,
	[plan_indicaciones] [nvarchar](max) NULL,
 CONSTRAINT [PK_Plan_alimentario] PRIMARY KEY CLUSTERED 
(
	[plan_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[recetas_plan]    Script Date: 10/7/2021 00:42:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[recetas_plan](
	[rplan_id] [int] NOT NULL,
	[rplan_linea] [int] NOT NULL,
	[rplan_descripcion] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Recetas_plan_alimentario] PRIMARY KEY CLUSTERED 
(
	[rplan_id] ASC,
	[rplan_linea] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tipo_turno]    Script Date: 10/7/2021 00:42:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tipo_turno](
	[tipoturno_id] [int] IDENTITY(1,1) NOT NULL,
	[tipoturno_descripcion] [nvarchar](50) NULL,
 CONSTRAINT [PK_Tipo_turno] PRIMARY KEY CLUSTERED 
(
	[tipoturno_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[turno]    Script Date: 10/7/2021 00:42:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[turno](
	[turno_id] [int] IDENTITY(1,1) NOT NULL,
	[turno_idagenda] [int] NOT NULL,
	[turno_fecha] [datetime] NOT NULL,
	[turno_horainicio] [time](7) NOT NULL,
	[turno_horafin] [time](7) NOT NULL,
	[turno_nrohc] [int] NULL,
	[turno_idtipo] [int] NOT NULL,
	[turno_idestado] [int] NULL,
 CONSTRAINT [PK_Turno] PRIMARY KEY CLUSTERED 
(
	[turno_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[usuario]    Script Date: 10/7/2021 00:42:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[usuario](
	[usu_id] [int] NOT NULL,
	[usu_nombre] [nvarchar](50) NOT NULL,
	[usu_clave] [nvarchar](10) NOT NULL,
	[usu_idperfil] [int] NOT NULL,
	[usu_correo] [nvarchar](50) NULL,
 CONSTRAINT [PK_Usuario] PRIMARY KEY CLUSTERED 
(
	[usu_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
