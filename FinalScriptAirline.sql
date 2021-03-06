USE [AirlineReservationSystem]
GO
/****** Object:  StoredProcedure [dbo].[DisplayTicket]    Script Date: 2/26/2020 11:01:44 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[DisplayTicket]
(
@pid int,
@age int
)
as
begin 
select * from ticketinfo where ProfileId=@pid and PassengerAge=@age
end 
GO
/****** Object:  StoredProcedure [dbo].[FinalFlightSearch]    Script Date: 2/26/2020 11:01:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[FinalFlightSearch]
(
@Jdate date,
@Sloc varchar(20),
@Dloc varchar(20)
)
as
begin 

select j.JourneyDate,f.FlightNumber,r.SourceLocation,r.DestinationLocation,m.DepartureTime,f.SeatAvailablePerClass
from FlightClass f join FlightJourneyDetails j
on f.ClassId=j.classId 
join FlightMaster m 
on j.FlightNumber =m.FlightNumber 
join FlightRoute r
on m.FlightNumber=r.FlightNumber
where JourneyDate=@Jdate and SourceLocation=@Sloc and DestinationLocation=@Dloc
end
GO
/****** Object:  StoredProcedure [dbo].[FlightSearchFinal]    Script Date: 2/26/2020 11:01:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[FlightSearchFinal]
(
@Jdate date,
@Sloc varchar(20),
@Dloc varchar(20)
)
as
begin 

select j.JourneyDate,f.FlightNumber,r.SourceLocation,r.DestinationLocation,m.DepartureTime,f.SeatAvailablePerClass
from FlightClass f join FlightJourneyDetails j
on f.ClassId=j.classId 
join FlightMaster m 
on j.FlightNumber =m.FlightNumber 
join FlightRoute r
on m.FlightNumber=r.FlightNumber
where JourneyDate=@Jdate and SourceLocation=@Sloc 
end

GO
/****** Object:  StoredProcedure [dbo].[FlightSearchNew]    Script Date: 2/26/2020 11:01:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[FlightSearchNew]
(
@Jdate date,
@Sloc varchar(20),
@Dloc varchar(20)
)
as
begin 

select convert(date, j.JourneyDate, 111),f.FlightNumber,r.SourceLocation,r.DestinationLocation,m.DepartureTime,f.SeatAvailablePerClass
from FlightClass f join FlightJourneyDetails j
on f.ClassId=j.classId 
join FlightMaster m 
on j.FlightNumber =m.FlightNumber 
join FlightRoute r
on m.FlightNumber=r.FlightNumber
where JourneyDate=@Jdate and SourceLocation=@Sloc 
end

GO
/****** Object:  StoredProcedure [dbo].[InsertDetailsTicket]    Script Date: 2/26/2020 11:01:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[InsertDetailsTicket]
(
@pid int,
@fnum int,
@pname varchar(50),
@cid int,
@pAge int,
@sno int,
@nooftickets int,
@amt int,
@gen varchar(10)
)
as
begin 
insert into TicketInfo values(@pid,@fnum,@pname,@cid,@pAge,@sno,@nooftickets,@amt,@gen)
update FlightClass set SeatAvailablePerClass=SeatAvailablePerClass-@nooftickets
where ClassId=@cid
end 
GO
/****** Object:  StoredProcedure [dbo].[InsertTicket]    Script Date: 2/26/2020 11:01:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[InsertTicket]
(
@pid int,
@fnum int,
@sno int,
@pname varchar(50),
@pAge int,
@cid int,
@nooftickets int,
@amt int,
@gen varchar(10)
)
as
begin 
insert into TicketInfo values(@pid,@fnum,@sno,@pname,@pAge,@cid,@nooftickets,@amt,@gen)
end 
GO
/****** Object:  StoredProcedure [dbo].[InsertTicketDetail]    Script Date: 2/26/2020 11:01:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[InsertTicketDetail]
(
@pid int,
@fnum int,
@pname varchar(50),
@cid int,
@pAge int,
@sno int,
@nooftickets int,
@amt int,
@gen varchar(10)
)
as
begin 
insert into TicketInfo values(@pid,@fnum,@pname,@cid,@pAge,@sno,@nooftickets,@amt,@gen)
update FlightClass set SeatAvailablePerClass=SeatAvailablePerClass-@nooftickets
where ClassId=@cid
end 
GO
/****** Object:  StoredProcedure [dbo].[InsertTicketInfo]    Script Date: 2/26/2020 11:01:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[InsertTicketInfo]
(
@pid int,
@fnum int,
@sno int,
@pname varchar(50),
@pAge int,
@cid int,
@nooftickets int,
@amt int,
@gen varchar(10)
)
as
begin 
insert into TicketInfo values(@pid,@fnum,@pname,@pAge,@sno,@cid,@nooftickets,@amt,@gen)
end 
GO
/****** Object:  StoredProcedure [dbo].[InsertTicketInformation]    Script Date: 2/26/2020 11:01:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[InsertTicketInformation]
(
@pid int,
@fnum int,
@pname varchar(50),
@cid int,
@pAge int,
@sno int,
@nooftickets int,
@amt int,
@gen varchar(10)
)
as
begin 
insert into TicketInfo values(@pid,@fnum,@pname,@cid,@pAge,@sno,@nooftickets,@amt,@gen)
update FlightClass set SeatAvailablePerClass=SeatAvailablePerClass-@nooftickets
where ClassId=@cid
end 
GO
/****** Object:  StoredProcedure [dbo].[InsertTickets]    Script Date: 2/26/2020 11:01:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[InsertTickets]
(
@pid int,
@fnum int,
@pname varchar(50),
@cid int,
@pAge int,
@sno int,
@nooftickets int,
@amt int,
@gen varchar(10)
)
as
begin 
insert into TicketInfo values(@pid,@fnum,@pname,@cid,@pAge,@sno,@nooftickets,@amt,@gen)
update FlightClass set SeatAvailablePerClass=SeatAvailablePerClass-@nooftickets
where ClassId=@cid
end 
GO
/****** Object:  StoredProcedure [dbo].[InsertUserTicket]    Script Date: 2/26/2020 11:01:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[InsertUserTicket]
(
@pid int,
@fnum int,
@pname varchar(50),
@cid int,
@pAge int,
@sno int,
@nooftickets int,
@amt int,
@gen varchar(10)
)
as
begin 
insert into TicketInfo values(@pid,@fnum,@pname,@cid,@pAge,@sno,@nooftickets,@amt,@gen)
update FlightClass set SeatAvailablePerClass=SeatAvailablePerClass-@nooftickets
where ClassId=@cid
end 
GO
/****** Object:  StoredProcedure [dbo].[Payment]    Script Date: 2/26/2020 11:01:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Payment]
(
@pid int
)
as 
begin
select c.CardNumber,c.CardType,c.ExpiryDate,c.ExpiryYear,c.cvv 
from CardDetails c join Registration r
on c.ProfileId=r.ProfileId
where r.ProfileId=@pid
 end
GO
/****** Object:  StoredProcedure [dbo].[Search]    Script Date: 2/26/2020 11:01:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[Search]
(
@Jdate date,
@Sloc varchar(20),
@Dloc varchar(20)
)
as
begin 

select j.JourneyDate,m.FlightNumber,r.SourceLocation,r.DestinationLocation,m.DepartureTime,f.SeatAvailablePerClass
from FlightClass f join FlightJourneyDetails j
on f.ClassId=j.classId 
join FlightMaster m 
on j.FlightNumber =m.FlightNumber 
join FlightRoute r
on m.FlightNumber=r.FlightNumber
where JourneyDate=@Jdate and SourceLocation=@Sloc and DestinationLocation=@Dloc
end
GO
/****** Object:  StoredProcedure [dbo].[Seats]    Script Date: 2/26/2020 11:01:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Seats]
(
@fnum int
)
as
begin
select SeatAvailablePerClass,DestPrice,c.ClassId
from FlightClass c join FlightMaster m
on c.FlightNumber=m.FlightNumber
join FlightRoute r
on r.FlightNumber=m.FlightNumber
where m.FlightNumber=@fnum

end

exec Seats 22001
GO
/****** Object:  StoredProcedure [dbo].[SeatsAvailable]    Script Date: 2/26/2020 11:01:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SeatsAvailable](@fnumber int)
as 
begin
select r.DestPrice dest,c.ClassId idc,c.SeatAvailablePerClass seats
from FlightRoute r 
join FlightClass c
on r.FlightNumber = c.FlightNumber
where r.FlightNumber = @fnumber
end
GO
/****** Object:  StoredProcedure [dbo].[spFlightSearch]    Script Date: 2/26/2020 11:01:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[spFlightSearch]
(
@Jdate date,
@Sloc varchar(20),
@Dloc varchar(20)
)
as
begin 

select convert(date, j.JourneyDate, 111),f.FlightNumber,r.SourceLocation,r.DestinationLocation,m.DepartureTime,f.SeatAvailablePerClass
from FlightClass f join FlightJourneyDetails j
on f.ClassId=j.classId 
join FlightMaster m 
on j.FlightNumber =m.FlightNumber 
join FlightRoute r
on m.FlightNumber=r.FlightNumber
where JourneyDate=@Jdate and SourceLocation=@Sloc 
end

GO
/****** Object:  StoredProcedure [dbo].[spLogin]    Script Date: 2/26/2020 11:01:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[spLogin]
as 
begin 
select EmailId,PWD from Registration
end

GO
/****** Object:  StoredProcedure [dbo].[spProfileInfo]    Script Date: 2/26/2020 11:01:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[spProfileInfo]
(
@pid int
)
as 
begin
select t.Ticketid,t.FlightNumber,t.PassengerName,t.PassengerAge,t.SeatNumber,c.ClassType,t.amount
from TicketInfo t join FlightClass c
on t.classid=c.classid  
where ProfileId=@pid

end
GO
/****** Object:  StoredProcedure [dbo].[spTicketDetail]    Script Date: 2/26/2020 11:01:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[spTicketDetail]
(
@Tid int

)
as
begin
select t.Ticketid,t.FlightNumber,t.PassengerName,t.PassengerAge,t.SeatNumber,c.ClassType,t.amount
from TicketInfo t join FlightClass c
on t.classid=c.classid 
where Ticketid=@Tid
end
GO
/****** Object:  StoredProcedure [dbo].[Tickets]    Script Date: 2/26/2020 11:01:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Tickets]
(
@pid int,
@pname varchar(50),
@age int
)
as
begin 
select * from ticketinfo where ProfileId=@pid and PassengerName=@pname and PassengerAge=@age
end 
GO
/****** Object:  Table [dbo].[AdminDetails]    Script Date: 2/26/2020 11:01:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[AdminDetails](
	[AdminId] [int] IDENTITY(101,1) NOT NULL,
	[Title] [varchar](4) NULL,
	[FirstName] [nvarchar](50) NOT NULL,
	[LastName] [nvarchar](50) NULL,
	[EmailId] [nvarchar](max) NOT NULL,
	[PWD] [nvarchar](30) NOT NULL,
	[DOB] [date] NOT NULL,
	[PhoneNumber] [nvarchar](15) NOT NULL,
	[FlightNumber] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[AdminId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[CardDetails]    Script Date: 2/26/2020 11:01:46 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[CardDetails](
	[CardNumber] [bigint] NOT NULL,
	[ProfileId] [int] NOT NULL,
	[CardType] [varchar](10) NOT NULL,
	[ExpiryDate] [int] NOT NULL,
	[ExpiryYear] [int] NOT NULL,
	[cvv] [int] NULL,
 CONSTRAINT [pk_Card] PRIMARY KEY CLUSTERED 
(
	[CardNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[FlightClass]    Script Date: 2/26/2020 11:01:46 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[FlightClass](
	[ClassId] [int] NOT NULL,
	[ClassType] [varchar](20) NOT NULL,
	[ClassPrice] [money] NOT NULL,
	[FlightNumber] [int] NOT NULL,
	[SeatAvailablePerClass] [int] NOT NULL,
	[TotalSeatsPerClass] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ClassId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[FlightJourneyDetails]    Script Date: 2/26/2020 11:01:46 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[FlightJourneyDetails](
	[FlightNumber] [int] NOT NULL,
	[JourneyDate] [date] NOT NULL,
	[JourneyStatus] [varchar](20) NOT NULL,
	[classId] [int] NOT NULL
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[FlightMaster]    Script Date: 2/26/2020 11:01:46 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[FlightMaster](
	[FlightNumber] [int] NOT NULL,
	[TotalNumberOfSeats] [int] NOT NULL,
	[FlightStatus] [varchar](20) NOT NULL,
	[ArrivalTime] [datetime] NOT NULL,
	[DepartureTime] [datetime] NOT NULL,
	[BoardingTime] [datetime] NOT NULL,
	[Flightid] [int] IDENTITY(1,1) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[FlightNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[FlightRoute]    Script Date: 2/26/2020 11:01:46 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[FlightRoute](
	[RouteId] [int] NOT NULL,
	[SourceLocation] [varchar](20) NOT NULL,
	[DestinationLocation] [varchar](20) NOT NULL,
	[FirstStop] [varchar](20) NULL,
	[FirstStopPrice] [money] NULL,
	[SecondStop] [varchar](20) NULL,
	[SecondStopPrice] [money] NULL,
	[DestPrice] [money] NOT NULL,
	[FlightNumber] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[RouteId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Registration]    Script Date: 2/26/2020 11:01:46 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Registration](
	[ProfileId] [int] IDENTITY(11111,1) NOT NULL,
	[Title] [varchar](4) NULL,
	[FirstName] [nvarchar](50) NOT NULL,
	[LastName] [nvarchar](50) NULL,
	[EmailId] [nvarchar](max) NOT NULL,
	[PWD] [nvarchar](30) NOT NULL,
	[PhoneNumber] [nvarchar](15) NOT NULL,
	[securityquestion] [varchar](50) NULL,
	[SecurityAns] [varchar](max) NULL,
	[Age] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[ProfileId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[TicketInfo]    Script Date: 2/26/2020 11:01:46 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[TicketInfo](
	[ProfileId] [int] NOT NULL,
	[FlightNumber] [int] NOT NULL,
	[PassengerName] [varchar](50) NOT NULL,
	[ClassId] [int] NOT NULL,
	[PassengerAge] [int] NOT NULL,
	[SeatNumber] [int] NOT NULL,
	[Ticketid] [int] IDENTITY(3567,2) NOT NULL,
	[nooftickets] [int] NOT NULL,
	[amount] [int] NOT NULL,
	[Gender] [varchar](10) NULL,
PRIMARY KEY CLUSTERED 
(
	[Ticketid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
ALTER TABLE [dbo].[AdminDetails]  WITH CHECK ADD FOREIGN KEY([FlightNumber])
REFERENCES [dbo].[FlightMaster] ([FlightNumber])
GO
ALTER TABLE [dbo].[CardDetails]  WITH CHECK ADD  CONSTRAINT [FK_ProfileId] FOREIGN KEY([ProfileId])
REFERENCES [dbo].[Registration] ([ProfileId])
GO
ALTER TABLE [dbo].[CardDetails] CHECK CONSTRAINT [FK_ProfileId]
GO
ALTER TABLE [dbo].[FlightClass]  WITH CHECK ADD  CONSTRAINT [FK_FlightClass] FOREIGN KEY([FlightNumber])
REFERENCES [dbo].[FlightMaster] ([FlightNumber])
GO
ALTER TABLE [dbo].[FlightClass] CHECK CONSTRAINT [FK_FlightClass]
GO
ALTER TABLE [dbo].[FlightJourneyDetails]  WITH CHECK ADD  CONSTRAINT [FK_ClassidFlightJourneyDetails] FOREIGN KEY([classId])
REFERENCES [dbo].[FlightClass] ([ClassId])
GO
ALTER TABLE [dbo].[FlightJourneyDetails] CHECK CONSTRAINT [FK_ClassidFlightJourneyDetails]
GO
ALTER TABLE [dbo].[FlightJourneyDetails]  WITH CHECK ADD  CONSTRAINT [FK_FlightJourneyDetails] FOREIGN KEY([FlightNumber])
REFERENCES [dbo].[FlightMaster] ([FlightNumber])
GO
ALTER TABLE [dbo].[FlightJourneyDetails] CHECK CONSTRAINT [FK_FlightJourneyDetails]
GO
ALTER TABLE [dbo].[FlightRoute]  WITH CHECK ADD  CONSTRAINT [FK_FlightNumber] FOREIGN KEY([FlightNumber])
REFERENCES [dbo].[FlightMaster] ([FlightNumber])
GO
ALTER TABLE [dbo].[FlightRoute] CHECK CONSTRAINT [FK_FlightNumber]
GO
ALTER TABLE [dbo].[TicketInfo]  WITH CHECK ADD  CONSTRAINT [FK_classid] FOREIGN KEY([ClassId])
REFERENCES [dbo].[FlightClass] ([ClassId])
GO
ALTER TABLE [dbo].[TicketInfo] CHECK CONSTRAINT [FK_classid]
GO
ALTER TABLE [dbo].[TicketInfo]  WITH CHECK ADD  CONSTRAINT [FK_FlightNumber1] FOREIGN KEY([FlightNumber])
REFERENCES [dbo].[FlightMaster] ([FlightNumber])
GO
ALTER TABLE [dbo].[TicketInfo] CHECK CONSTRAINT [FK_FlightNumber1]
GO
ALTER TABLE [dbo].[TicketInfo]  WITH CHECK ADD  CONSTRAINT [FK_ProfileId2] FOREIGN KEY([ProfileId])
REFERENCES [dbo].[Registration] ([ProfileId])
GO
ALTER TABLE [dbo].[TicketInfo] CHECK CONSTRAINT [FK_ProfileId2]
GO
ALTER TABLE [dbo].[CardDetails]  WITH CHECK ADD CHECK  (([ExpiryDate]<=(12)))
GO
ALTER TABLE [dbo].[CardDetails]  WITH CHECK ADD CHECK  (([ExpiryDate]<=(12)))
GO
ALTER TABLE [dbo].[CardDetails]  WITH CHECK ADD CHECK  (([ExpiryDate]<=(12)))
GO
ALTER TABLE [dbo].[CardDetails]  WITH CHECK ADD CHECK  (([ExpiryDate]<=(12)))
GO
